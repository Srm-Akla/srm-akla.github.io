<<<<<<< HEAD
import MY_PROJECTS from '$lib/projects.params';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const project = MY_PROJECTS.find((item) => {
=======
import { items } from '@data/projects';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const project = items.find((item) => {
>>>>>>> upstream/master
			return item.slug === params.slug;
		});

		return { project };
	}
}
