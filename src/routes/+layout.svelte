<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>Kit</title>
</svelte:head>

<main class="w-[80ch]">
	{@render children()}
</main>
