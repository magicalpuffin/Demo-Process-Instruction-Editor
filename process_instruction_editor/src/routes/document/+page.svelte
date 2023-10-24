<script lang="ts">
	import type { JSONContent } from '@tiptap/core';
	import type { Writable } from 'svelte/store';
	import type { stepDocument, stepDocumentsIndexed } from '$lib/types/processInstruction';

	import TipTap from '$lib/components/stepDocument/TipTap.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { writable } from 'svelte/store';
	import { generateRandomId } from '$lib/utils';
</script>

<Breadcrumbs />
