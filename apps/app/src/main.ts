import App from './App.svelte';

const app = new App({
  target: document.body,
  // Example to pass props to the root component
  props: {
    name: 'World',
  },
});

export default app;
