<script lang="ts">
	import type { PageData } from './$types';
	import type { JSONContent } from '@tiptap/core';

	import { stepDocuments } from '$lib/components/store';
	import DocumentEditor from '$lib/components/stepDocument/DocumentEditor.svelte';
	import { saveStepDocument } from '$lib/utils';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	export let data: PageData;

	let stepDocument = data.stepDocument;
</script>

<Breadcrumbs />
<DocumentEditor
	editorDocument={stepDocument}
	on:documentSave={(e) => {
		saveStepDocument(e.detail, $stepDocuments);
	}}
/>
