<script>
	import MainTitle from './MainTitle/MainTitle.svelte';
	import TabTitle from './TabTitle.svelte';

	export let title = 'Title';
<<<<<<< HEAD
	export let titleClass = '';
=======
>>>>>>> upstream/master
</script>

<TabTitle bind:title />
<div class="flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
<<<<<<< HEAD
	<MainTitle classes={titleClass}>{title}</MainTitle>
=======
	<MainTitle>{title}</MainTitle>
>>>>>>> upstream/master
	<div class="col gap-5 flex-1">
		<slot />
	</div>
</div>
