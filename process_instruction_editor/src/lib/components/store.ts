import type { Writable } from 'svelte/store';
import type { stepDocumentsType } from '$lib/types/processInstruction';

import { writable } from 'svelte/store';

import { getStepDocuments } from '$lib/utils';

export const stepDocuments: Writable<stepDocumentsType> = writable(getStepDocuments());
