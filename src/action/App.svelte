<main
	class="
		flex
		flex-col
		items-center
		text-neutral-900
		dark:text-neutral-100
	"
>
	<div class="p-5 w-full flex flex-col items-center gap-5">
		<div class="flex flex-col items-center">
			<img class="h-16" alt="ext logo" src={getURL('/src/icons/128.png')}>
			<p class="text-lg">{getI18nMessage('appName')}</p>
		</div>
		<p>Popup page</p>
		<button
			class="
				px-4
				py-2
				w-fit
				bg-neutral-200
				dark:bg-neutral-700
				hover:bg-neutral-300
				dark:hover:bg-neutral-600
				transition-colors
				rounded-full
			"
			type="button"
			on:click={openOptionsPage}
		>Open options page</button>
	</div>
</main>

<svelte:head>
	<title>{getI18nMessage('appName')}</title>
</svelte:head>

<script lang="ts">
import { getURL, getI18nMessage, openOptionsPage } from '~/shared/browser';
</script>
