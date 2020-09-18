<template>
	<div>
		<nuxt-content :document="post" />
		<pagination />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params, error }) {
		try {
			const slug = params.slug !== undefined ? params.slug : 'README';
			let post = await $content(`framework/${params.folder1}`, slug).fetch();

			if (Array.isArray(post)) post = post[0];

			const title = post.body.children[0].children[1].value || '';
			return { post, title: `${title} - GestiOS Framework Wiki` };
		} catch (err) {
			error({ statusCode: 404, message: 'Página no encontrada' });
			return false;
		}
	},
	head() {
		return {
			title: this.title
		};
	}
};
</script>
