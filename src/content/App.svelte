<div class="fixed right-0 bottom-0 m-5 z-100 flex items-center">
	{#if show}
		<div
			class="
				p-4
				flex
				flex-col
				items-center
				gap-4
				bg-white
				dark:bg-neutral-900
				border
				border-neutral-300
				dark:border-neutral-700
				rounded-xl
				shadow-xl
			"
			transition:fly={{
				duration: 300,
				x: 100,
			}}
		>
			<div class="flex flex-col items-center">
				<img class="h-16" alt="ext logo" src={getURL('/src/icons/128.png')} />
				<p class="text-lg">{getI18nMessage('appName')}</p>
			</div>
			<p>Content script</p>
			<button
				class="
					px-4
					py-2
					bg-neutral-200
					dark:bg-neutral-700
					hover:bg-neutral-300
					dark:hover:bg-neutral-600
					transition-colors
					rounded-full
				"
				onclick={close}
				title="Close"
				type="button"
			>
				Close
			</button>
		</div>
	{/if}
</div>

<script lang="ts">
import { fly } from 'svelte/transition';
import { getURL, getI18nMessage } from '~/shared/browser';

let show: boolean = $state(true);

const close = () => {
	show = !show;
};
</script>
