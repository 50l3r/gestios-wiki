<template>
	<a-col

		v-show="anchor.length > 0"
		:xs="{ span: 0 }"
		:sm="{ span: 0 }"
		:md="{ span: 0 }"
		:lg="{ span: 4 }"
		:xl="{ span: 4}"
		:xxl="{ span: 3}"
		:class="$style.anchor"
	>
		<a-anchor>
			<a-anchor-link
				href="#"
				title="En este documento"
				:class="$style.title"
			/>

			<a-anchor-link
				v-for="(item,index) in anchor"
				:key="index"
				:href="'#'+item.id"
				:title="item.text"
				:class="$style.link"
			>
				<a-anchor-link
					v-for="(sitem,sindex) in item.childs"
					:key="sindex"
					:href="'#'+sitem.id"
					:title="sitem.text"
					:class="$style.link"
				/>
			</a-anchor-link>
		</a-anchor>
	</a-col>
</template>

<script>
/* eslint-disable prefer-arrow-callback */

export default {
	name: 'WikiAnchor',
	computed: {
		anchor() {
			return this.$store.getters.anchor;
		}
	},
	watch: {
		'$route.path': function () {
			this.$store.dispatch('anchor', { route: this.$route, $content: this.$content });
		}
	},
	created() {
		this.$store.dispatch('anchor', { route: this.$route, $content: this.$content });
	}
};
</script>

<style lang="less" module>
	.title{
		margin-bottom: 10px;
		padding: 10px 0;
		margin: 10px;
		font-family: Rubik;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 16px;
	}

	.link{
		font-size: 13px;
	}
</style>

<style lang="less">
	.ant-anchor-wrapper{
		background: transparent;
	}

	.anchor>div{
		height: 100%;
		background-color: inherit;
	}

	.anchor>div>div{
		height: 100%;
		background-color: inherit;
	}

	.anchor>div>div>div{
		height: 100%;
		background-color: inherit;
	}

	.anchor>div>div>div>div{
		height: 100%;
		overflow-y: hidden;
	}
</style>
