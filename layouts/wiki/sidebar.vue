<template>
	<a-affix :offset-top="0">
		<a-menu
			mode="inline"
			:default-selected-keys="[$route.path]"
			:open-keys.sync="openKeys"
			:class="$style.depth0"
		>
			<template v-for="(item) in sidebar">
				<a-menu-item
					v-if="!item.children"
					:key="item.url"
				>
					<n-link :to="item.url">
						<a-space>
							{{ item.title }}
						</a-space>
					</n-link>
				</a-menu-item>

				<a-sub-menu
					v-else
					:key="item.key"
					:title="item.title"
					:class="$style.depth1"
				>
					<template v-for="(sitem) in item.children">
						<a-menu-item
							v-if="!sitem.children"
							:key="sitem.url"
						>
							<n-link
								:to="sitem.url"
							>
								<a-space>
									{{ sitem.title }}
								</a-space>
							</n-link>
						</a-menu-item>

						<a-sub-menu
							v-else
							:key="sitem.key"
							:title="sitem.title"
							:class="$style.depth2"
						>
							<template v-for="(ssitem) in sitem.children">
								<a-menu-item
									:key="ssitem.url"
								>
									<n-link
										:to="ssitem.url"
									>
										<a-space>
											{{ ssitem.title }}
										</a-space>
									</n-link>
								</a-menu-item>
							</template>
						</a-sub-menu>
					</template>
				</a-sub-menu>
			</template>
		</a-menu>
	</a-affix>
</template>

<script>

export default {
	data() {
		return {
			openKeys: []
		};
	},
	computed: {
		sidebar() {
			return this.$store.getters.sidebar;
		}
	},
	watch: {
		'$route.path': function () {
			this.$store.dispatch('anchor', { route: this.$route, $content: this.$content });
		}
	},
	created() {
		this.openKeys = this.$route.path.split('/').splice(1);
	}
};
</script>

<style lang="less" module>
	.depth0 li a, .depth0 li div{
		font-size: 18px !important;
		font-weight: bold;
	}

	.depth1 ul li a, .depth1 ul li div{
		font-size: 16px !important;
		font-weight: 600;
	}

	.depth2 ul li a, .depth2 ul li div{
		font-size: 14px !important;
		font-weight: 400;
	}
</style>

<style lang="less">
	.sidebar{
		.ant-menu{
			height: 100%;

			li.ant-menu-submenu div, li.ant-menu-item a{
				font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,
				Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
				//font-size: 16px;
				// text-transform: uppercase;
				// font-weight: 400;
				//color: #2c3e50;
			}
		}
	}

	// .sidebar>div>div>ul.ant-menu>li.ant-menu-item>a,
	// .sidebar>div>div>ul.ant-menu>li.ant-menu-submenu>div{
	// 	font-size: 20px;
	// 	font-weight: 600;
	// }

</style>
