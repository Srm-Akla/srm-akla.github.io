import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';

import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';

import { Icons } from './utils';

export const TITLE_SUFFIX = '';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Sriram',
	lastName: 'Akella',
	description:
		`Hey, I'm Sriram Akella, a tech enthusiast with a knack for problem-solving. I hold a Master's in AI and a Bachelor's in Electronics. When I'm not diving into the latest tech trends, you'll find me outdoors staying active or catching up with friends over a pint. Let's connect and explore some exciting projects together!`,
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/srm-akla' },
		{ platform: Platform.Email, link: 'sriramakella@proton.me' },
	/**
		{ platform: Platform.Linkedin, link: 'https://www.linkedin.com/' },
		{ platform: Platform.Twitter, link: 'https://twitter.com/' },
		{ platform: Platform.StackOverflow, link: 'https://stackoverflow.com/' },
		{ platform: Platform.Youtube, link: 'https://www.youtube.com' },
		{ platform: Platform.Facebook, link: 'https://www.facebook.com' },
	    **/
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS,
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	skills: MY_SKILLS,

};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'src/lib/md/CV_english_2024.pdf'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
