<script lang="ts">
	import type { JSONContent } from '@tiptap/core';
	import type { Writable } from 'svelte/store';
	import type { stepDocument } from '$lib/types/processInstruction';

	import TipTap from '$lib/components/stepDocument/TipTap.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { writable } from 'svelte/store';

	let documentContent: Writable<JSONContent> = writable(getLocalStorage()?.document);
	let documentName: string;

	function generateRandomId() {
		// Generate a random number and convert it to a hexadecimal string
		const randomId = Math.random().toString(36).substring(2);

		return randomId;
	}

	function createStepDocument(documentContent: JSONContent): stepDocument {
		let newStepDocument: stepDocument = {
			id: generateRandomId(),
			name: documentName,
			document: documentContent,
			dataCollection: null
		};

		return newStepDocument;
	}

	function saveStepDocument(stepDocument: stepDocument) {
		let serializedData = JSON.stringify(stepDocument);
		console.log(serializedData);
		localStorage.setItem('testStepDocument', serializedData);
	}

	function getLocalStorage(): stepDocument | undefined {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('testStepDocument') !== null) {
			// item not present in local storage, use initial value
			let saved: stepDocument = JSON.parse(String(localStorage.getItem('testStepDocument')));
			console.log(saved);
			return saved;
		}
	}

	function getCurrentDocument() {
		console.log($documentContent);
	}
</script>

<Breadcrumbs />

<div class="flex flex-row justify-between">
	<h1 class="my-2 text-3xl font-bold">Create Document</h1>
	<button
		class="btn btn-accent"
		on:click={() => {
			let stepDocument = createStepDocument($documentContent);
			saveStepDocument(stepDocument);
		}}>Save</button
	>
</div>
<button class="btn btn-primary" on:click={getLocalStorage}>Get Local Storage</button>
<button class="btn btn-secondary" on:click={getCurrentDocument}>Get current document</button>

<input
	type="text"
	placeholder="Type here"
	class="input input-bordered w-full max-w-xs focus:outline-none"
	bind:value={documentName}
/>

<div class="my-2 rounded-lg border p-2 shadow-lg">
	<TipTap editorStore={documentContent} />
</div>
