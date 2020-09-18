<template>
	<div
		class="nuxt-content"
		:class="$style.prevNext"
	>
		<a-row
			type="flex"
		>
			<a-col
				:span="12"
			>
				<nuxt-link
					v-if="pagination.back"
					:to="pagination.back.url"
				>
					← {{ pagination.back.title }}
				</nuxt-link>
			</a-col>
			<a-col
				:span="12"
				align="end"
			>
				<nuxt-link
					v-if="pagination.next"
					:to="pagination.next.url"
				>
					{{ pagination.next.title }} →
				</nuxt-link>
			</a-col>
		</a-row>
	</div>
</template>

<script>
export default {
	name: 'WikiPagination',
	computed: {
		pagination() {
			return this.$store.getters.pagination;
		}
	}
};
</script>

<style lang="less" module>
	.prevNext{
		margin-top: 2rem;
		padding: 2rem 0;
		border-top: 1px solid #e8e8e8;
		font-size: 14px;
	}
</style>
