<script lang="ts">
	import type { PageData } from './$types';
	import type { JSONContent } from '@tiptap/core';

	import { stepDocuments } from '$lib/components/store';
	import DocumentEditor from '$lib/components/stepDocument/DocumentEditor.svelte';
	import { saveStepDocument } from '$lib/utils';

	export let data: PageData;

	let stepDocument = data.stepDocument;

	// function handleDocumentSave(documentContent: JSONContent) {
	// 	console.log(documentContent);
	// 	stepDocument.document = documentContent;
	// 	saveStepDocument(stepDocument, $stepDocuments);
	// }

	// console.log(currentDocument);
</script>

<DocumentEditor
	editorDocument={stepDocument}
	on:documentSave={(e) => {
		saveStepDocument(e.detail, $stepDocuments);
	}}
/>
