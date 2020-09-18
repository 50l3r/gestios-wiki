<template>
	<a-select
		ref="search"
		v-debounce:300ms="search"
		show-search
		size="large"
		:class="$style.search"
		:placeholder="'Buscar en la wiki...'"
		:default-active-first-option="false"
		:show-arrow="true"
		:filter-option="false"
		@change="goToLink"
	>
		<div
			slot="notFoundContent"
			:class="$style.searchEmpty"
		>
			<fa
				:icon="['fal','transporter-empty']"
				size="3x"
			/>
			<span class="mt-md">Sin resultados</span>
		</div>

		<a-icon
			slot="suffixIcon"
			type="search"
		/>
		<a-select-option
			v-for="(a, i) in articles"
			:key="i"
			:value="a"
			:class="$style.result"
		>
			<span>{{ a.title }}</span>
			<div :class="$style.path">
				<div>/{{ a.breads }}</div>
				<div>{{ a.scope }}</div>
			</div>
		</a-select-option>
	</a-select>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return {
			query: '',
			articles: [],
			loading: false
		};
	},
	watch: {
		async query(query) {
			this.loading = true;

			if (!query) {
				this.articles = [];
				return;
			}

			const articles = await this.$content('', { deep: true })
				.sortBy('title', 'asc')
				.limit(6)
				.search(query)
				.fetch();

			this.articles = [];
			articles.forEach((a) => {
				a.title = '';
				if (a.title !== undefined) {
					a.title = a.body.children[0].children[1].value;
				}
				let breads = a.dir.split('/');

				breads = a.dir.split('/');
				if (breads.length > 2) breads.pop();
				breads.shift();
				a.scope = breads[0];
				breads.shift();

				a.breads = breads.join('/');
			});

			this.articles = articles;
			this.loading = false;
		}
	},
	methods: {
		search(val) {
			this.query = val;
		},
		goToLink(article) {
			const path = article.path.replace('README', '');

			this.$router.push(path);
			this.$refs.search.value = [];
		}
	}
};
</script>

<style lang="less" module>
	.searchEmpty{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 10px;
	}

	.search{
		width: 100%;

		div{
			border: 0 !important;
			box-shadow: none !important;
			background-color: var(--dark-1) !important;
			color: white;
		}

	}

	.result{
		span{
			font-weight: bold;
		}

		.path{
			display: flex;
			justify-content: space-between;

			div{
				font-size: 10px;
				text-transform: capitalize;
			}
		}
	}

	@media only screen and (max-width: 990px)  {
		.searchCol{
			display: none;
		}
	}
</style>

<style lang="less">
	.ant-select-dropdown-menu-item:nth-child(even){
		background-color: #f9f9f9;
	}
</style>
