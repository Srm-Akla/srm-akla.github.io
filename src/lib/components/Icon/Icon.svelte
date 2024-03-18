<script lang="ts">
	import type { Icons } from '$lib/utils';
	import { viewBox } from './Icons';

	let el: SVGElement;
	export let color = 'var(--main-text)';

	export let icon: Icons;
</script>

<svg
	bind:this={el}
	class="inline-block"
	viewBox={viewBox(icon)}
	fill={color}
	height=35px
	width=35px
>
	<path d={icon} />
</svg>
