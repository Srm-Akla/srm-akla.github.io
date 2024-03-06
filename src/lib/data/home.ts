import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Sriram';

export const lastName = 'Akella';

export const description =
	`Hey, I'm Sriram Akella, a tech enthusiast with a knack for problem-solving. I hold a Master's in AI and a Bachelor's in Electronics. When I'm not diving into the latest tech trends, you'll find me outdoors staying active or catching up with friends over a pint. Let's connect and explore some exciting projects together!`;
	
export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/srm-akla' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
	{
		platform: Platform.Email,
		link: 'sriramakella@proton.me',
	},

];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
