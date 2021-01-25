import singleSpaSvelte from 'single-spa-svelte';
import App from './App.svelte';

const svelteLifecycles = singleSpaSvelte({
  component: App,
  domElementGetter: () => document.getElementById('app-svelte'),
  props: { someData: 'data' }
});

export const { bootstrap, mount, unmount } = svelteLifecycles