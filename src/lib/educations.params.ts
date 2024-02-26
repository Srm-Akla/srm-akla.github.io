import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Master degree in Artificial Intelligence and Internet Of Things',
		description: '',
		color: 'green',
		location: 'Grimstad, Norway',
		logo: Assets.UIA,
		name: 'University of Agder',
		organization: 'UIA',
		period: { from: new Date(2022, 8, 15), to: new Date(2024, 6, 17) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Neural Networks', 'Reinforcement Learning', 'Distributed and Big Data Systems', 
					'WiFi, 5G, IoT', 'Computer Vision', 'Edge computing', 'Generative AI']
	},
	{
		degree: 'Bachelor degree of Electronics Engineering',
		description: '',
		color: 'green',
		location: 'Grimstad, Norway',
		logo: Assets.UIA,
		name: 'University of Agder',
		organization: 'UIA',
		period: { from: new Date(2018, 8, 15), to: new Date(2022, 6, 5) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Digital Electronics', 'Analog Electronics', 'Embedded Systems', 'Algorithms',
					'Communications', 'Signal Analysis', 'Operating systems', 'Databases']
	}

];
