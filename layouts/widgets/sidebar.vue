<template>
	<a-affix
		:offset-top="0"
		:class="$style.sidebar"
	>
		<sidebar-menu />

		<a-drawer
			title="Navegación"
			placement="left"
			:visible="menuOpen"
			:class="$style.drawer"
			@close="menuOpen = false"
		>
			<div
				slot="handle"
				:class="$style.menuHandle"
				@click="menuOpen = !menuOpen"
			>
				<fa :icon="['far','bars']" />
			</div>
			<sidebar-menu />
		</a-drawer>
	</a-affix>
</template>

<script>

import SidebarMenu from './sidebar-menu';

export default {
	name: 'Sidebar',
	components: {
		SidebarMenu
	},
	data() {
		return {
			menuOpen: false
		};
	}
};
</script>

<style lang="less" module>
	.menuHandle{
		display: none;
		position: absolute;
		right: -45px;
		background: var(--dark);
		color: white;
		z-index: 999;
		top: 20%;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		padding: 5px;
		width: 45px;
		height: 40px;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 5px rgba(0,0,0,0.3);
	}

	@media only screen and (max-width: 1200px)  {
		.menuHandle{
			display: flex;
		}
	}

	.sidebar{
		background-color: var(--dark);
		padding: 2rem 0;
		height: 100%;
	}
</style>
