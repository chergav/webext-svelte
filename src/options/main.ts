import App from '~/options/App.svelte';
import '~/shared/styles.css';
import { mount } from 'svelte';

mount(App, {
	target: document.querySelector('#app') as HTMLDivElement,
});
