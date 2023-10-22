<script lang="ts">
	import type { JSONContent } from '@tiptap/core';
	import type { Writable } from 'svelte/store';

	import TipTap from '$lib/components/stepDocument/TipTap.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { writable } from 'svelte/store';

	let testWriteable: Writable<JSONContent> = writable();
</script>

<Breadcrumbs />

<h1 class="my-2 text-3xl font-bold">Create Process Instruction</h1>
<div class="join bg-base-200 flex justify-around rounded-lg shadow-lg">
	<button class="btn join-item grow">Document</button>
	<button class="btn join-item grow">Data Collection</button>
	<button class="btn join-item grow">Attachments</button>
	<button class="btn join-item btn-accent grow">Save</button>
</div>

<div class="my-2 rounded-lg border p-2 shadow-lg">
	<TipTap editorStore={testWriteable} />
</div>
