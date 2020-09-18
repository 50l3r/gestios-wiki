<template>
	<a-breadcrumb>
		<a-breadcrumb-item>
			<nuxt-link to="/">
				<fa :icon="['far','home-lg']" />
			</nuxt-link>
		</a-breadcrumb-item>
		<a-breadcrumb-item
			v-for="(b,i) in breads"
			:key="i"
		>
			<nuxt-link
				v-if="b.url && i < (breads.length - 1)"
				:to="b.url"
			>
				{{ b.breadTitle ? b.breadTitle : b.title }}
			</nuxt-link>

			<template v-else>
				{{ b.title }}
			</template>
		</a-breadcrumb-item>
	</a-breadcrumb>
</template>

<script>
export default {
	name: 'Breads',
	computed: {
		breads() {
			return this.$store.getters.breads;
		}
	},
	watch: {
		'$route.path': function () {
			this.$store.dispatch('breads', { route: this.$route });
		}
	},
	created() {
		this.$store.dispatch('breads', { route: this.$route });
	}
};
</script>
