<script lang="ts">
<<<<<<< HEAD
	import { TITLE_SUFFIX } from '$lib/params';
=======
	import { titleSuffix } from '@data/app';
>>>>>>> upstream/master
	import { useTitle } from '$lib/utils/helpers';

	export let title: string;
</script>

<svelte:head>
<<<<<<< HEAD
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
=======
	<title>{useTitle(title, titleSuffix)}</title>
>>>>>>> upstream/master
</svelte:head>
