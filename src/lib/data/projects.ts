import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'ODIAV',
		color: '#f5e0dc',
		description:
			`
			The Purpose of the project was to develop software that can detect humans, vehicle, roadlane from an autonomous vehicle's perspective. We have used YOLO algorithm for object detection.
			Check out the project on github.
			`,	
		shortDescription:
			"Software that can detect humans, vehicles, roadlanes from an autonomous vehicle's perspective.",
		links: [{ to: 'https://github.com/Srm-Akla/ODAV', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Object Detection in Autonomous Vehicles',
		period: {
			from: new Date(2021, 8, 15),
			to: new Date(2021, 12, 15),
		},
		skills: getSkills('python', 'opencv', 'yolo', 'classif'),
		type: 'Projects'
	},
	{
		slug: 'alarm',
		color: '#f5e0dc',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Alarm clock which displays the time and can be configured to set an alarm at a given time. The project is build using Atmega328P, FreeRTOS, timers, interrupts and etc.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Alarm Clock',
		period: {
			from: new Date()
		},
		skills: getSkills('c', 'atmega328p', 'freertos'),
		type: 'Project'
	},
	{
		slug: 'amplifier',
		color: '#f5e0dc',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'The project mainly consists of a voltage and an output which is a monolithic audio amplifier block that can supply 20 W to a 4 or 8 ohm speaker.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Power Amplifier',
		period: {
			from: new Date()
		},
		skills: getSkills('circuit'),
		type: 'Project'
	},
	{
		slug: 'sensehat',
		color: '#f5e0dc',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Controlling sensehat module of raspberry pi throught mqtt broker.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'SenseHat-Mqtt',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'mqtt'),
		type: 'Project'
	},
	{
		slug: 'FLUWN',
		color: '#f5e0dc',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Federated learning for finding the small-world networks in a cluster of randomly positioned UAVs. Analyze transmission delay, energy consumption, and throughput for the small world network.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Federated Learning for UAV-assisted wireless network',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'tensorflow', 'opencv'),
		type: 'Publication'
	},
	{
		slug: 'dronebird',
		color: '#f5e0dc',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Model trained to classify birds or drones, trained with custom dataset using thermal and depth camera.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Classification of drones and birds using thermal and depth camera',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'tensorflow', 'pandas', 'classif'),
		type: 'Publication'
	},
	{
		slug: 'waveblue',
		color: '#f5e0dc',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Wavelet-based Transform for Bluetooth-based Parking Spot Occupancy Detection using Convolutional Neural Network',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Wavelet-based Transform for Bluetooth-based Parking Spot Occupancy Detection using Convolutional Neural Network',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'tensorflow', 'pandas', 'classif'),
		type: 'Publication'
	},
	/**
	{
		slug: 'slick-portfolio-svelte',
		color: '#f2cdcd',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}**/
];

export const title = 'Projects';
