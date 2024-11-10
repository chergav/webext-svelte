import App from '~/content/App.svelte';
import css from '~/content/main.css?inline';
import { mount } from 'svelte';

const customElement = document.createElement(__NAME__);
const shadowRoot = document.createElement('div');
const shadowStyle = document.createElement('style');
const shadowDOM = customElement.attachShadow({ mode: 'open' }) || customElement;
shadowStyle.textContent = css;
shadowDOM.appendChild(shadowStyle);
shadowDOM.appendChild(shadowRoot);
document.body.appendChild(customElement);

mount(App, {
	target: shadowRoot,
});
