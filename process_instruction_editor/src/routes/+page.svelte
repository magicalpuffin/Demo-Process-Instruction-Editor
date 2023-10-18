<script lang="ts">
	import type { JSONContent } from '@tiptap/core';
	import type { Writable } from 'svelte/store';
	import TipTap from '$lib/components/TipTap.svelte';
	import { writable } from 'svelte/store';

	let testWriteable: Writable<JSONContent> = writable();

	// $: console.log($testWriteable);
</script>

<h1 class="my-4 text-3xl font-bold">TipTap Testing Area</h1>
<div class="border">
	<TipTap editorStore={testWriteable} />
</div>
