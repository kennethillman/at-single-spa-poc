import { registerApplication, start } from 'single-spa'
import "./assets/styles/global-styles.scss";

registerApplication(
  'vue-header', 
  () => import('./components/vue-header/index.js'),
  () => location.pathname === "/vue" || location.pathname === "/" ? true : false 
);

registerApplication(
  'svelte', 
  () => import('./components/svelte/index.js'),
  () => location.pathname === "/svelte" || location.pathname === "/" ? true : false 
);

registerApplication(
  'vue', 
  () => import('./components/vue/index.js'),
  () => location.pathname === "/vue" || location.pathname === "/" ? true : false 
);

registerApplication(
  'react',
  () => import('./components/react/index.js'),
  () => location.pathname === "/react" || location.pathname === "/" ? true : false
);

start();