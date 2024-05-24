import { error } from '@sveltejs/kit'

export async function load({ params: { post } }) {
	try {
		const module = await import(`../../../posts/${post}/${post}.md`)

		return {
			content: module.default,
			meta: module.metadata
		}
	} catch (e) {
		error(404, `Could not find ${post}`)
	}
}
