<script lang="ts">
	import type { JSONContent } from '@tiptap/core';
	import type { Writable } from 'svelte/store';
	import type { stepDocument, stepDocumentsIndexed } from '$lib/types/processInstruction';

	import TipTap from '$lib/components/stepDocument/TipTap.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';

	export let editorDocument: stepDocument;

	let documentName: string = editorDocument.name;
	let documentContent: Writable<JSONContent> = writable(editorDocument.document);

	const dispatch = createEventDispatcher();

	function dispatchSave() {
		let updatedDocument: Partial<stepDocument> = { name: documentName, document: $documentContent };
		dispatch('documentSave', { ...editorDocument, ...updatedDocument });
	}
</script>

<h1 class="my-2 text-3xl font-bold">Edit Document</h1>
<div class="flex flex-row justify-between">
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs focus:outline-none"
		bind:value={documentName}
	/>
	<button class="btn btn-accent" on:click={dispatchSave}>Save</button>
</div>

<div class="my-2 rounded-lg border p-2 shadow-lg">
	<TipTap contentStore={documentContent} />
</div>
