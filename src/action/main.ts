import App from '~/action/App.svelte';
import '~/shared/styles.css';

new App({
	target: document.querySelector('#app') as HTMLDivElement,
});
