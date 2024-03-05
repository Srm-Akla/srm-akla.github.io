<script lang="ts">
	export let classes = '';
<<<<<<< HEAD
	const items = [
		{ bgcolor: 'var(--code-keyword)' },
		{ bgcolor: 'var(--code-string)' },
		{ bgcolor: 'var(--code-function)' },
		{ bgcolor: 'var(--code-constant)' },
		{ bgcolor: 'var(--code-operator)' }
	] as const;
=======
>>>>>>> upstream/master
</script>

<h1
	class={`font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${classes}`}
<<<<<<< HEAD
=======
	style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
>>>>>>> upstream/master
>
	<slot />
</h1>
