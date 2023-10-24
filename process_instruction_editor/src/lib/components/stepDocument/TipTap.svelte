<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { JSONContent } from '@tiptap/core';

	import { onMount, onDestroy } from 'svelte';

	import Placeholder from '@tiptap/extension-placeholder';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	let element: HTMLElement;
	let editor: Editor;
	export let contentStore: Writable<JSONContent>;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit, Placeholder.configure({ placeholder: 'Start writing...' })],
			content: $contentStore,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onUpdate: () => {
				// Updating keep contentStore in sync
				contentStore.set(editor.getJSON());
			},
			editorProps: {
				attributes: {
					class: 'prose focus:outline-none m-5'
				}
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div bind:this={element} />

<style>
	:global(.tiptap p.is-editor-empty:first-child::before) {
		color: #adb5bd;
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	}
	:global(.tiptap) {
		min-height: 4em;
	}
</style>
