<template>
	<a-anchor v-show="anchor.length > 0">
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
</template>

<script>
/* eslint-disable prefer-arrow-callback */

export default {
	computed: {
		anchor() {
			return this.$store.getters.anchor;
		}
	},
	watch: {
		'$route.path': function () {
			// this.anchors();
		}
	}
};
</script>

<style lang="less" module>
	.title{
		border-bottom: 1px solid var(--anchor-border-color);
		margin-bottom: 10px;
		padding: 10px 0;
		margin: 10px;
		font-family: Rubik;
		text-transform: uppercase;
		font-weight: bold;
	}

	.link{
		font-size: 13px;
	}
</style>

<style lang="less">
	.anchor>div{
		height: 100%;
	}

	.anchor>div>div{
		height: 100%;
	}

	.anchor>div>div>div{
		height: 100%;
	}

	.anchor>div>div>div>div{
		height: 100%;
		overflow-y: hidden;
	}
</style>
