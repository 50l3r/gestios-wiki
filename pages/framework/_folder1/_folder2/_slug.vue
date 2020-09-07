<template>
	<div>
		<nuxt-content :document="post" />
	</div>
</template>

<script>
export default {
	layout: 'wiki',
	async asyncData({ $content, params }) {
		try {
			const slug = params.slug !== undefined ? params.slug : 'README';
			const post = await $content(`framework/${params.folder1}/${params.folder2}`, slug).fetch();

			if (Array.isArray(post)) {
				return { post: post[0] };
			}

			return { post };
		} catch (err) {
			console.debug(err);
			return false;
		}
	}
};
</script>
