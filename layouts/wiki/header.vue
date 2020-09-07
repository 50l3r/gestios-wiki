<template>
	<header :class="$style.header">
		<a-row
			type="flex"
			align="middle"
		>
			<a-col
				:xs="{ span: 24 }"
				:sm="{ span: 24 }"
				:md="{ span: 6 }"
				:lg="{ span: 7 }"
				:xl="{ span: 5}"
				:xxl="{ span: 4}"
			>
				<div :class="$style.title">
					<n-link to="/">
						<a-space>📚 <div>GestiOS Wiki</div></a-space>
					</n-link>
				</div>
			</a-col>
			<a-col
				:xs="{ span: 0 }"
				:sm="{ span: 0 }"
				:md="{ span: 18 }"
				:lg="{ span: 19 }"
				:xl="{ span: 19}"
				:xxl="{ span: 20}"
				class=""
			>
				<a-row
					type="flex"
					align="middle"
				>
					<a-col flex="300px">
						<a-select
							v-debounce:300ms="search"
							show-search
							size="large"
							:class="$style.search"
							placeholder="Buscar en la wiki..."
							style="width: 100%"
							:default-active-first-option="false"
							:show-arrow="true"
							:filter-option="false"
							@change="goToLink"
						>
							<a-icon
								slot="suffixIcon"
								type="search"
							/>
							<a-select-option
								v-for="(a, i) in articles"
								:key="i"
							>
								{{ a.title }}
							</a-select-option>
						</a-select>
					</a-col>
					<a-col
						flex="auto"
						class="text-right"
					>
						<a-menu
							mode="horizontal"
							:class="$style.menu"
							:default-selected-keys="[rootPath]"
						>
							<a-menu-item
								v-for="(item, index) in menu"
								:key="index"
							>
								<n-link to="/framework">
									<a-space>
										<fa
											:icon="item.icon"
										/> {{ item.title }}
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

export default {
	data() {
		return {
			menu: settings.menu,
			query: '',
			articles: [],
			rootPath: ''
		};
	},
	computed: {
		route() {
			return this.$route.name;
		}
	},
	watch: {
		async query(query) {
			if (!query) {
				this.articles = [];
				return;
			}

			const articles = await this.$content('framework', { deep: true })
				// .only(['title', 'slug'])
				.sortBy('createdAt', 'asc')
				.limit(12)
				.search(query)
				.fetch();

			this.articles = [];
			articles.forEach((a) => {
				a.title = '';
				if (a.title !== undefined) {
					a.title = a.body.children[0].children[1].value;
				}
			});
			this.articles = articles;
		},
		'$route.path': function () {
			this.getRootPath();
		}
	},
	created() {
		this.getRootPath();
	},
	methods: {
		search(val) {
			this.query = val;
		},
		goToLink(index) {
			const article = this.articles[index];
			const path = article.path.replace('README', '');
			this.$router.push(path);
		},
		getRootPath() {
			const url = this.$route.path.split('/');
			this.rootPath = url[1];
		}
	}
};
</script>

<style lang="less" module>
	.header{
		border: 1px solid var(--border-color-base)
	}

	.title{
		font-size: 1.3rem;
		color: #2c3e50;
		padding: 0 20px;
		font-weight: 600;
		font-family: Rubik;
	}

	.menu{
		text-align:right;
		border: 0;
		font-size: 15px;
		font-weight: 600;
	}

	.search>div{
		border: 0 !important;
		box-shadow: none !important;
		color: black;
	}
</style>
