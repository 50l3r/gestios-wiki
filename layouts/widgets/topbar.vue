<template>
	<header
		:class="$style.header"
		class="topbar"
	>
		<a-row
			type="flex"
			align="middle"
		>
			<a-col
				:xs="{ span: 24 }"
				:sm="{ span: 24 }"
				:md="{ span: 7 }"
				:lg="{ span: 5 }"
				:xl="{ span: 5}"
				:xxl="{ span: 4}"
			>
				<div :class="$style.title">
					<n-link to="/">
						<logo />
					</n-link>
				</div>
			</a-col>
			<a-col
				:xs="{ span: 0 }"
				:sm="{ span: 0 }"
				:md="{ span: 17 }"
				:lg="{ span: 19 }"
				:xl="{ span: 19}"
				:xxl="{ span: 20}"
				class=""
			>
				<a-row
					type="flex"
					align="middle"
				>
					<a-col
						flex="300px"
						:class="$style.searchCol"
					>
						<wiki-search />
					</a-col>
					<a-col
						flex="auto"
						class="text-right"
					>
						<a-menu
							mode="horizontal"
							:class="$style.menu"
							:default-selected-keys="[rootPath]"
							theme="dark"
						>
							<a-menu-item
								v-for="(item, index) in menu"
								:key="index"
								:disabled="item.disabled"
							>
								<n-link :to="item.url">
									<a-space>
										{{ item.title }}
									</a-space>
								</n-link>
							</a-menu-item>
						</a-menu>
					</a-col>
				</a-row>
			</a-col>
		</a-row>
	</header>
</template>

<script>
import settings from '@/config/settings';
import wikiSearch from './search';

export default {
	name: 'Topbar',
	components: { wikiSearch },
	data() {
		return {
			menu: settings.menu,
			rootPath: ''
		};
	},
	computed: {
		route() {
			return this.$route.name;
		}
	},
	watch: {
		'$route.path': function () {
			this.getRootPath();
		}
	},
	created() {
		this.getRootPath();
	},
	methods: {
		getRootPath() {
			const url = this.$route.path.split('/');
			this.rootPath = url[1];
		}
	}
};
</script>

<style lang="less" module>
	.title{
		font-size: 1.3rem;
		color: #2c3e50;
		padding: 0 20px;
		font-weight: 600;
		font-family: Rubik;
		display: flex;
		align-items: center;
		min-height: 48px;
	}

	.menu{
		text-align:right;
		border: 0;
		font-size: 16px;
		font-weight: 600;
	}

</style>

<style lang="less">
	.topbar .ant-menu-horizontal{
		line-height: 60px;
	}
</style>
