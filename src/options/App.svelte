<main class="text-neutral-900 dark:text-neutral-100">
	<div class="p-5 w-full flex flex-col items-center gap-5">
		<div class="flex flex-col items-center">
			<img class="h-16" alt="ext logo" src={getURL('/src/icons/128.png')}>
			<p class="text-lg">{getI18nMessage('appName')}</p>
		</div>
		<p>Options page</p>
	</div>
</main>

<svelte:head>
	<title>{getI18nMessage('appName')}</title>
</svelte:head>

<script lang="ts">
import { getURL, getI18nMessage } from '~/shared/browser';
</script>
