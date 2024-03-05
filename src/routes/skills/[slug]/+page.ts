<<<<<<< HEAD
import MY_SKILLS from '$lib/skills.params';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const skill = MY_SKILLS.find((item) => {
=======
import { items } from '@data/skills';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const skill = items.find((item) => {
>>>>>>> upstream/master
			return item.slug === params.slug;
		});

		return { skill };
	}
}
