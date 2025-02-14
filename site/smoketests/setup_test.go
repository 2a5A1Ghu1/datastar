package smoketests

import (
	"context"
	"fmt"
	"os"
	"sync"
	"testing"

	"github.com/delaneyj/toolbelt"
	"github.com/go-rod/rod"
	"github.com/starfederation/datastar/site"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

var (
	baseURL string
	browser *rod.Browser
)

func TestMain(m *testing.M) {
	if err := os.Chdir("../../"); err != nil {
		panic(fmt.Errorf("could not change the working directory: %w", err))
	}

	ctx := context.Background()

	port, err := toolbelt.FreePort()
	if err != nil {
		panic(fmt.Errorf("could not obtain a free port: %w", err))
	}

	baseURL = fmt.Sprintf("http://localhost:%d", port)

	readyCh := make(chan struct{})
	go site.RunBlocking(port, readyCh)(ctx)
	<-readyCh

	browser = rod.New().MustConnect()

	m.Run()

	ctx.Done()
}

type runnerFn func(name string, fn func(t *testing.T, page *rod.Page))

func setupPageTest(t *testing.T, subURL string, gen func(runner runnerFn)) {
	t.Parallel()
	page := browser.MustIncognito().MustPage(fmt.Sprintf("%s/%s", baseURL, subURL))
	require.NotNil(t, page)
	t.Cleanup(page.MustClose)

	wg := &sync.WaitGroup{}

	runner := func(name string, fn func(t *testing.T, page *rod.Page)) {
		wg.Add(1)
		defer wg.Done()
		fn(t, page)
	}

	gen(runner)

	wg.Wait()
}

func setupPageTestOnClick(t *testing.T, subURL string) {
	setupPageTest(t, subURL, func(runner runnerFn) {
		runner(subURL, func(t *testing.T, page *rod.Page) {
			result := page.MustElement("#result")
			before, err := result.Text()
			assert.NoError(t, err)
			assert.Contains(t, before, "0")
	
			btn := page.MustElement("button")
			btn.MustClick()
			page.MustWaitIdle()
			after, err := result.Text()
			assert.NoError(t, err)
			assert.Contains(t, after, "1")
		})
	})
}

func setupPageTestOnLoad(t *testing.T, subURL string) {
	setupPageTest(t, subURL, func(runner runnerFn) {
		runner(subURL, func(t *testing.T, page *rod.Page) {
			result := page.MustElement("#result")
			page.MustWaitIdle()
			after, err := result.Text()
			assert.NoError(t, err)
			assert.Contains(t, after, "1")
		})
	})
}