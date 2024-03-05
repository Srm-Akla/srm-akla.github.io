<<<<<<< HEAD
import MY_EXPERIENCES from '$lib/experiences.params';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const experience = MY_EXPERIENCES.find((item) => {
=======
import { items } from '@data/experience';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const experience = items.find((item) => {
>>>>>>> upstream/master
			return item.slug === params.slug;
		});

		return { experience };
	}
}
