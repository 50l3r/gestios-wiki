/* eslint-disable import/prefer-default-export */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import settings from '@/config/settings';

function findInSidebar(scope, url) {
	const sidebar = settings.sidebars[scope];

	if (sidebar !== undefined) {
		let post = false;
		let back = false;
		let next = false;

		for (let i = 0, len = sidebar.length; i < len; i += 1) {
			const m1 = sidebar[i];

			if (m1.url === url) {
				post = m1;

				if (post.pag !== undefined && post.pag.next !== undefined) next = post.pag.next;
				if (post.pag !== undefined && post.pag.back !== undefined) back = post.pag.back;
				if (sidebar[i - 1] !== undefined && !back) back = sidebar[i - 1];
				if (sidebar[i + 1] !== undefined && !next) next = sidebar[i + 1];
			}

			if (m1.children !== undefined) {
				for (let i2 = 0, len = m1.children.length; i2 < len; i2 += 1) {
					const m2 = m1.children[i2];

					if (m2.url === url && !post) {
						post = m2;

						if (post.pag !== undefined && post.pag.next !== undefined) next = post.pag.next;
						if (post.pag !== undefined && post.pag.back !== undefined) back = post.pag.back;
						if (m1.children[i2 - 1] !== undefined && !back) back = m1.children[i2 - 1];
						if (m1.children[i2 + 1] !== undefined && !next) next = m1.children[i2 + 1];
					}

					if (m2.children !== undefined) {
						for (let i3 = 0, len = m2.children.length; i3 < len; i3 += 1) {
							const m3 = m2.children[i3];

							if (m3.url === url && !post) {
								post = m3;

								if (post.pag !== undefined && post.pag.next !== undefined) next = post.pag.next;
								if (post.pag !== undefined && post.pag.back !== undefined) back = post.pag.back;
								if (m2.children[i3 - 1] !== undefined && !back) back = m2.children[i3 - 1];
								if (m2.children[i3 + 1] !== undefined && !next) next = m2.children[i3 + 1];
							}
						}
					}
				}
			}
		}

		return { post, back, next };
	}

	return null;
}

export const state = () => ({
	sidebar: {},
	anchor: [],
	breads: [],
	pagination: [],
	scope: ''
});

export const mutations = {
	SET_SIDEBAR(state, value) {
		state.sidebar = value;
	},
	SET_ANCHOR(state, value) {
		state.anchor = value;
	},
	SET_BREADS(state, value) {
		state.breads = value;
	},
	SET_PAGINATION(state, value) {
		state.pagination = value;
	},
	SET_SCOPE(state, value) {
		state.scope = value;
	}
};

export const getters = {
	sidebar(state) { return state.sidebar; },
	anchor(state) { return state.anchor; },
	breads(state) { return state.breads; },
	pagination(state) { return state.pagination; },
	scope(state) { return state.scope; }
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

		if (url[1] === 'framework') {
			let route = 'framework';
			if (params.folder1 !== undefined) route += `/${params.folder1}`;
			if (params.folder2 !== undefined) route += `/${params.folder2}`;

			const slug = params.slug !== undefined ? params.slug : 'README';
			let post = await $content(route, slug).fetch();

			if (Array.isArray(post)) post = post[0];

			if (post) {
				commit('SET_ANCHOR', post.toc);
			} else {
				commit('SET_ANCHOR', []);
			}
		} else {
			commit('SET_ANCHOR', []);
		}
	},

	breads({ commit }, { route }) {
		const url = route.path.split('/');
		const urlLength = url.length;
		const scope = url[1];

		const breads = [];

		for (let i = 0; i <= urlLength; i += 1) {
			const menu = findInSidebar(scope, url.join('/'));
			if (menu) {
				if (menu.post) breads.push(menu.post);
				url.pop();
			}
		}

		const post = findInSidebar(scope, route.path);

		if (post) {
			commit('SET_BREADS', breads.reverse());
			commit('SET_PAGINATION', { back: post.back, next: post.next });
		} else {
			commit('SET_BREADS', []);
			commit('SET_PAGINATION', []);
		}
	},

	scope({ commit }, route) {
		const path = route.split('/');
		commit('SET_SCOPE', path[1]);
	},

	nuxtServerInit({ dispatch }, { route }) {
		dispatch('scope', route.path);
	}
};
