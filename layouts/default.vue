<template>
	<div :class="$style.app">
		<topbar />

		<div :class="$style.wrapper">
			<a-row
				type="flex"
				class="flex-1"
			>
				<a-col
					v-if="sidebar"
					:xs="{ span: 0 }"
					:sm="{ span: 0 }"
					:md="{ span: 0 }"
					:lg="{ span: 0 }"
					:xl="{ span: 5}"
					:xxl="{ span: 4}"
					:class="$style.sidebar"
				>
					<sidebar />
				</a-col>

				<a-col

					:class="$style.mainContainer"
				>
					<a-row
						v-show="scope==='framework'"
						type="flex"
					>
						<a-col span="24">
							<breads />
						</a-col>
					</a-row>

					<a-row
						type="flex"
						class="flex-1 h-100"
						align="top"
					>
						<a-col
							:xs="{ span: grid2.xs }"
							:sm="{ span: grid2.sm }"
							:md="{ span: grid2.md }"
							:lg="{ span: grid2.lg }"
							:xl="{ span: grid2.xl}"
							:xxl="{ span: grid2.xxl}"
							class="flex-1 h-100"
							:class="$style.container"
						>
							<nuxt />
						</a-col>
						<client-only>
							<anchor />
						</client-only>
					</a-row>
					<a-row type="flex">
						<a-col span="24">
							<foot />
						</a-col>
					</a-row>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>

import settings from '@/config/settings';

import Topbar from './widgets/topbar';
import Sidebar from './widgets/sidebar';
import Breads from './widgets/breads';
import Foot from './widgets/footer';
import Anchor from './wiki/wiki-anchor';

export default {
	components: {
		Topbar,
		Sidebar,
		Breads,
		Foot,
		Anchor
	},
	data() {
		return {
			settings
		};
	},
	computed: {
		scope() {
			return this.$store.getters.scope;
		},
		route() {
			return this.$route.name;
		},
		sidebar() {
			let sidebar = false;

			if (settings.sidebars[this.scope] !== undefined) {
				sidebar = settings.sidebars[this.scope];
			}

			return sidebar;
		},
		anchor() {
			if (this.scope === 'framework') return true;
			return false;
		},
		grid() {
			const grid = {
				xs: 24,
				sm: 24,
				md: 24,
				lg: 24,
				xl: 24,
				xxl: 24
			};

			if (this.sidebar) {
				grid.xl -= 5;
				grid.xxl -= 4;
			}

			return grid;
		},

		grid2() {
			const grid = {
				xs: 24,
				sm: 24,
				md: 24,
				lg: 24,
				xl: 24,
				xxl: 24
			};

			if (this.anchor) {
				grid.lg -= 4;
				grid.xl -= 4;
				grid.xxl -= 3;
			}

			return grid;
		}
	},
	watch: {
		'$route.path': function (val) {
			this.$store.dispatch('scope', val);
		}
	}
};
</script>

<style lang="less" module>
	.app{
		min-height: 100vh;
		display: flex;
		flex-direction: column;

		.wrapper{
			flex: 1;
			display: flex;

			.container{
				padding: 2rem 2.5rem 0 2.5rem;
				display: flex;
				flex-direction: column;
				align-self: flex-start;
			}

			.mainContainer{
				border-top-left-radius: 30px;
				background-color: #F2F4F8;
				display: flex;
				flex-direction: column;
				flex: 1;
			}

			.anchor{
				padding: 2rem 0 0 0;
			}

			@media only screen and (max-width: 767px)  {
				.container{
					padding: 1rem 1.5rem 0 1.5rem;
				}
			}
		}
	}

</style>

<style>

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease-out;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
