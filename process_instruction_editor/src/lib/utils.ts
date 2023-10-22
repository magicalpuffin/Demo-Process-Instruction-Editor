import type { stepDocument, stepDocumentsType } from '$lib/types/processInstruction';

const DOCUMENTS_KEY = 'stepDocuments';

export function generateRandomId() {
	// Generate a random number and convert it to a hexadecimal string
	const randomId = Math.random().toString(36).substring(2);

	return randomId;
}

export function getStepDocuments(): stepDocumentsType {
	if (typeof localStorage !== 'undefined' && localStorage.getItem(DOCUMENTS_KEY) !== null) {
		// item not present in local storage, use initial value
		const saved: stepDocumentsType = new Map(
			JSON.parse(String(localStorage.getItem(DOCUMENTS_KEY)))
		);
		// console.log(saved);
		return saved;
	} else {
		const saved: stepDocumentsType = new Map();
		return saved;
	}
}

export function createStepDocument(): stepDocument {
	const newStepDocument: stepDocument = {
		id: generateRandomId(),
		name: 'New document',
		document: [],
		dataCollection: null
	};

	// console.log(newStepDocument);

	return newStepDocument;
}

export function saveStepDocument(newStepDocument: stepDocument, stepDocuments: stepDocumentsType) {
	// console.log(stepDocuments);
	const newStepDocuments = stepDocuments.set(newStepDocument.id, newStepDocument);
	const serializedData = JSON.stringify(Array.from(newStepDocuments));

	// console.log(serializedData);
	localStorage.setItem('stepDocuments', serializedData);
}
