import type { PageLoad } from './$types';
import { stepDocuments } from '$lib/components/store';
import type { stepDocument } from '$lib/types/processInstruction';
import { error } from '@sveltejs/kit';

export const ssr = false;

export const load: PageLoad = ({ params }) => {
	let stepDocument: stepDocument | undefined;

	stepDocuments.subscribe((value) => {
		stepDocument = value.get(params.slug);
	});

	if (!stepDocument) {
		throw error(404, 'Document not found');
	}
	return { stepDocument };
};
