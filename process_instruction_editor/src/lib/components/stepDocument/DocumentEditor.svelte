<script lang="ts">
	import type { JSONContent } from '@tiptap/core';
	import type { Writable } from 'svelte/store';
	import type { stepDocument, stepDocumentsType } from '$lib/types/processInstruction';

	import TipTap from '$lib/components/stepDocument/TipTap.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';

	export let editorDocument: stepDocument;

	let documentName: string = editorDocument.name;

	let contentStore = writable(editorDocument.document);

	const dispatch = createEventDispatcher();
</script>

<Breadcrumbs />

<div class="flex flex-row justify-between">
	<h1 class="my-2 text-3xl font-bold">Create Document</h1>
	<button
		class="btn btn-accent"
		on:click={() => {
			dispatch('documentSave', { ...editorDocument, name: documentName, document: $contentStore });
		}}>Save</button
	>
</div>

<input
	type="text"
	placeholder="Type here"
	class="input input-bordered w-full max-w-xs focus:outline-none"
	bind:value={documentName}
/>

<div class="my-2 rounded-lg border p-2 shadow-lg">
	<TipTap editorStore={contentStore} />
</div>
