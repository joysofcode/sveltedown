---
title: Example
description: Example post.
date: '2024-5-16'
categories:
  - sveltekit
  - svelte
published: true
---

<script>
  import Counter from './counter.svelte'
  import Widget from './widget.svelte'
</script>

## Components

You can use Svelte components inside Markdown.

<Counter start={10} />

## Widgets

<Widget />

## Code Blocks

Syntax highlighting is done with Shiki.

```svelte
<script lang="ts">
	let count = $state(0)
</script>

<button onclick={() => count++}>
	{count}
</button>
```

## Images

Media inside the **static** folder is served from `/`.

![Svelte](favicon.png)
