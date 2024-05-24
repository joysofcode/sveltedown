<script lang="ts">
	type Props = { start: number }

	let { start }: Props = $props()
	let count = $state(start)
</script>

<button onclick={() => count++} class="cursor-pointer rounded bg-gray-700 p-4 text-2xl">
	{count}
</button>
