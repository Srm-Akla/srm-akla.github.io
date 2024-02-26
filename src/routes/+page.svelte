<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';

	const { description, lastName, links, name, title, skills } = HOME;

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>

<!--<div class="snow"> </div>-->
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left text-[var(--code-operator)]">Welcome!</MainTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'30px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills ?? MY_SKILLS} />
</div>

<style lang="scss">
$d: 70;      // density
$w: 600;     // grid size
$s: 3s;       // speed

// Generate the snow image using radial gradients
$grad: ();
@for $i from 0 to $d {
  $v: random(4) + 2;
  $a: random(5) * .001 + .5;
  $grad: $grad, radial-gradient(
      $v+px $v+px at
      (random($w - $v * 2) + $v)+px
      (random($w - $v * 2) + $v)+px, 
      rgba(140, 140, 140,$a) 10%,
      rgba(0,0,0,0)
  ) !global;
}

.snow, .snow:before, .snow:after {
  position: absolute;
  top: -$w + px;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: $grad;
  background-size: $w + px $w + px;
  animation: snow $s linear infinite;
  content: "";
}
.snow:after {
  margin-left: -$w/3 + px;
  opacity: .15;
  animation-duration: $s*2;
  animation-direction: reverse;
  filter: blur(3px);
}
.snow:before {
  animation-duration: $s*3;
  animation-direction: reverse;
  margin-left: -$w/2 + px;
  opacity: .15;
  filter: blur(1.5px);
}
@keyframes snow {
  to {
    transform: translateY($w + px);
  }
}


</style>
