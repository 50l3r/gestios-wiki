<template>
	<div id="app">
		<wiki-header />

		<div class="wrapper">
			<a-row type="flex">
				<a-col
					v-show="sidebar"
					:xs="{ span: 12 }"
					:sm="{ span: 8 }"
					:md="{ span: 6 }"
					:lg="{ span: 5 }"
					:xl="{ span: 5}"
					:xxl="{ span: 4}"
					class="sidebar"
				>
					<wiki-sidebar />
				</a-col>

				<a-col
					:xs="{ span: grid.xs }"
					:sm="{ span: grid.sm }"
					:md="{ span: grid.md }"
					:lg="{ span: grid.lg }"
					:xl="{ span: grid.xl}"
					:xxl="{ span: grid.xxl}"
					class="container"
				>
					<div class="nuxt-content">
						<a-breadcrumb>
							<a-breadcrumb-item
								v-for="(b,i) in breads"
								:key="i"
							>
								<nuxt-link
									v-if="b.url"
									:to="b.url"
								>
									{{ b.title }}
								</nuxt-link>
								<template v-else>
									{{ b.title }}
								</template>
							</a-breadcrumb-item>
						</a-breadcrumb>
					</div>

					<nuxt />

					<wiki-footer />
				</a-col>

				<a-col
					:xs="{ span: 12 }"
					:sm="{ span: 8 }"
					:md="{ span: 5 }"
					:lg="{ span: 4 }"
					:xl="{ span: 4}"
					:xxl="{ span: 3}"
					class="anchor"
				>
					<wiki-anchor />
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
import settings from '@/config/settings';
import wikiHeader from './wiki/header';
import wikiSidebar from './wiki/sidebar';
import wikiFooter from './wiki/footer';
import wikiAnchor from './wiki/anchor';

export default {
	components: {
		wikiHeader,
		wikiSidebar,
		wikiFooter,
		wikiAnchor
	},
	data() {
		return {
			settings,
			breads: [
				{ title: 'Inicio', url: '/' }
			]
		};
	},
	computed: {
		route() {
			return this.$route.name;
		},
		sidebar() {
			let sidebar = true;

			if (settings.routes[this.route] !== undefined
				&& settings.routes[this.route].sidebar !== undefined
			) {
				sidebar = settings.routes[this.route].sidebar;
			}

			return sidebar;
		},
		grid() {
			if (this.sidebar) {
				return {
					xs: 24,
					sm: 24,
					md: 13,
					lg: 15,
					xl: 15,
					xxl: 17
				};
			}

			return {
				xs: 24,
				sm: 24,
				md: 24,
				lg: 24,
				xl: 24,
				xxl: 24
			};
		}
	},
	watch: {
		'$route.path': function () {
			this.getBreads();
		}
	},
	created() {
		this.getBreads();
	},
	methods: {
		getBreads() {
			const url = this.$route.path.split('/');
			console.log(url);
			const breads = [];
			let i = 0;
			url.forEach((u) => {
				i += 1;

				if (u === '') {
					breads.push({
						title: 'Inicio',
						url: '/'
					});
				} else if (i >= url.length) {
					breads.push({
						title: u.charAt(0).toUpperCase() + u.slice(1),
						url: ''
					});
				} else {
					breads.push({
						title: u.charAt(0).toUpperCase() + u.slice(1),
						url: '#'
					});
				}
			});
			this.breads = breads;
		}
	}
};
</script>

<style lang="less" scoped>
	#app{
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.wrapper{
		flex: 1;
		display: flex;

		.ant-row-flex{
			width: 100%;

			.anchor{
				padding: 2rem 0;
			}

			.container{
				padding: 2rem 2.5rem 0 2.5rem;
				display: flex;
				flex-direction: column;
			}

			.sidebar{
				padding: 2rem 0;
			}

			.ant-col{
				height: 100%;
			}
		}
	}

</style>
