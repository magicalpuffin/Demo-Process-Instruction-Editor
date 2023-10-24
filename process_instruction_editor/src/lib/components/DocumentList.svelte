<script lang="ts">
	import type { stepDocument } from '$lib/types/processInstruction';
	import ThreeDotsIcon from '$lib/icons/ThreeDotsIcon.svelte';

	export let documentList: stepDocument[];
	export let listTitle: string;
</script>

<ul class="menu bg-base-200 rounded-box">
	<li class="menu-title">{listTitle}</li>
	{#each documentList as stepDocument}
		<li>
			<div class="flex justify-between py-0 pr-0">
				<a class="grow py-2" href="/document/{stepDocument.id}">
					{stepDocument.name}
				</a>
				<details class="dropdown dropdown-end">
					<!-- TODO get the button height to fit, fix the 4 pixel gap -->
					<summary class="btn btn-ghost btn-sm"><ThreeDotsIcon /></summary>
					<ul class="dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
						<li><a href="/" tabindex="0">Delete</a></li>
						<li><a href="/" tabindex="0">Something</a></li>
					</ul>
				</details>
			</div>
		</li>
	{/each}
</ul>
