<script lang="ts">
	import type { JSONContent } from '@tiptap/core';
	import type { Writable } from 'svelte/store';
	import type { stepDocument, stepDocumentsType } from '$lib/types/processInstruction';

	import TipTap from '$lib/components/stepDocument/TipTap.svelte';
	import { writable } from 'svelte/store';

	import { stepDocuments } from '$lib/components/store';
</script>

<h1 class="my-2 text-3xl font-bold">Library</h1>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>Id</th>
				<th>Name</th>
			</tr>
		</thead>
		<tbody>
			{#each [...$stepDocuments] as [id, stepDocument]}
				<tr class="hover">
					<th>{stepDocument.id}</th>
					<th
						><a class="link link-primary" href="/document/{stepDocument.id}">
							{stepDocument.name}
						</a></th
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
