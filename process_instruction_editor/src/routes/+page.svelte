<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { stepDocument, stepDocumentsIndexed } from '$lib/types/processInstruction';

	import { writable } from 'svelte/store';

	import { stepDocuments } from '$lib/components/store';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import DocumentList from '$lib/components/DocumentList.svelte';
</script>

<Breadcrumbs />
<h1 class="my-2 text-3xl font-bold">Library</h1>

<DocumentList listTitle="Documents" documentList={Array.from($stepDocuments.values())} />
