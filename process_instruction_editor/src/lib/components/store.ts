import type { Writable } from 'svelte/store';
import type { stepDocumentsIndexed } from '$lib/types/processInstruction';

import { writable } from 'svelte/store';

import { getStepDocuments } from '$lib/utils';

export const stepDocuments: Writable<stepDocumentsIndexed> = writable(getStepDocuments());
