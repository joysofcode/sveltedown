<script lang="ts">
	import { getHighlighter, type HighlighterCore } from 'shiki'

	let editor: 'loading' | 'ready' = $state('loading')
	let highlighter: HighlighterCore
	let html = $state(
		`
<h1 class="title">Markdown<h1>

<style>
	.title {
		font-size: 1rem;
		color: aqua;
	}
</style>
`.trim()
	)

	async function createHighlighter() {
		highlighter = await getHighlighter({ langs: ['svelte'], themes: ['poimandres'] })
		editor = 'ready'
	}

	function highlightCode(code: string) {
		return highlighter.codeToHtml(code, { lang: 'svelte', theme: 'poimandres' })
	}

	$effect(() => {
		createHighlighter()
	})
</script>

{#if editor === 'ready'}
	<div class="grid w-full grid-cols-2 rounded-md border-1">
		<div class="editor p-4">
			<pre>{@html highlightCode(html)}</pre>
			<textarea bind:value={html} spellcheck="false"></textarea>
		</div>
		<div class="border-l-2 p-6">{@html html}</div>
	</div>
{/if}

<style>
	.editor {
		display: grid;

		& > * {
			grid-area: 1/1;
		}

		pre,
		textarea {
			font-family: var(--font-family-mono);
			line-height: var(--line-height-relaxed);
			tab-size: 2;
		}

		textarea {
			color: transparent;
			background: transparent;
			caret-color: white;
			scrollbar-width: none;

			&:focus {
				outline: none;
			}
		}
	}

	:global(.editor pre) {
		padding: 0px;
		background-color: transparent !important;
	}
</style>
