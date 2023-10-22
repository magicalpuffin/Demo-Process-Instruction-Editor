import type { JSONContent } from '@tiptap/core';

export type stepDocumentsType = Map<string, stepDocument>;

interface idName {
	id: string;
	name: string;
}

export type instruction = idName & {
	steps: instructionStep[];
};

export type instructionStep = {
	sequence: number;
	detail: instruction | stepDocument;
};

export type stepDocument = idName & {
	document: JSONContent;
	dataCollection: dataCollect | null;
};

export type dataCollection = idName & {
	dataCollections: dataCollect[];
};

export type dataCollect = idName & {
	type: string;
};
