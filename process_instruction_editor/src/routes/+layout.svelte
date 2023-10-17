<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<div class="flex justify-center">
	<div class="container m-2 max-w-4xl">
		<slot />
	</div>
</div>
