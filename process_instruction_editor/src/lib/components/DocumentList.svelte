<script lang="ts">
	import type { stepDocument } from '$lib/types/processInstruction';

	export let documentList: stepDocument[];
	export let listTitle: string;
</script>

<ul class="menu bg-base-200 rounded-box">
	<li class="menu-title">{listTitle}</li>
	{#each documentList as stepDocument}
		<li>
			<a href="/document/{stepDocument.id}">
				{stepDocument.name}
			</a>
		</li>
	{/each}
</ul>
