<script lang="ts">
	import type { JSONContent } from '@tiptap/core';
	import type { Writable } from 'svelte/store';
	import type { stepDocument } from '$lib/types/processInstruction';

	import TipTap from '$lib/components/stepDocument/TipTap.svelte';
	import { writable } from 'svelte/store';

	let stepDocuments = [];

	function getLocalStorage(): stepDocument | undefined {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('testStepDocument') !== null) {
			// item not present in local storage, use initial value
			let saved: stepDocument = JSON.parse(String(localStorage.getItem('testStepDocument')));
			console.log(saved);
			return saved;
		}
	}
</script>

<h1 class="my-2 text-3xl font-bold">Library</h1>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th />
				<th>Id</th>
				<th>Name</th>
				<th>Favorite Color</th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			<tr>
				<th>1</th>
				<td>Cy Ganderton</td>
				<td>Quality Control Specialist</td>
				<td>Blue</td>
			</tr>
			<!-- row 2 -->
			<tr class="hover">
				<th>2</th>
				<td>Hart Hagerty</td>
				<td>Desktop Support Technician</td>
				<td>Purple</td>
			</tr>
			<!-- row 3 -->
			<tr>
				<th>3</th>
				<td>Brice Swyre</td>
				<td>Tax Accountant</td>
				<td>Red</td>
			</tr>
		</tbody>
	</table>
</div>
