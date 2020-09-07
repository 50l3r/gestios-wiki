/* eslint-disable import/prefer-default-export */

export const state = () => ({
	sidebar: {},
	anchor: []
});

export const mutations = {
	SET_SIDEBAR(state, value) {
		state.sidebar = value;
	},
	SET_ANCHOR(state, value) {
		state.anchor = value;
	}
};

export const getters = {
	sidebar(state) { return state.sidebar; },
	anchor(state) { return state.anchor; }
};

export const actions = {
	sidebar({ commit }, { route, app }) {
		const url = route.path.split('/');
		const sidebar = app.$utils.sidebar(url[1]);

		commit('SET_SIDEBAR', sidebar);
	},

	async anchor({ commit }, { $content, route }) {
		const url = route.path.split('/');
		const params = route.params;

		commit('SET_ANCHOR', []);

		if (url[1] === 'framework') {
			let route = 'framework';
			if (params.folder1 !== undefined) route += `/${params.folder1}`;
			if (params.folder2 !== undefined) route += `/${params.folder2}`;

			const slug = params.slug !== undefined ? params.slug : 'README';
			let post = await $content(route, slug).fetch();

			if (Array.isArray(post)) post = post[0];

			if (post) commit('SET_ANCHOR', post.toc);
		}
	},

	nuxtServerInit({ dispatch }, { route, app, $content }) {
		dispatch('sidebar', { route, app });
		dispatch('anchor', { route, $content });
	}
};
