<script lang="ts">
	export let classes = '';
	const items = [
		{ bgcolor: 'var(--code-keyword)' },
		{ bgcolor: 'var(--code-string)' },
		{ bgcolor: 'var(--code-function)' },
		{ bgcolor: 'var(--code-constant)' },
		{ bgcolor: 'var(--code-operator)' }
	] as const;
</script>

<h1
	class={`font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${classes}`}
>
	<slot />
</h1>
