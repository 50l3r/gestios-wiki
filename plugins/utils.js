import settings from '@/config/settings';

function renderSidebar(index) {
	const sidebars = settings.sidebars;

	if (sidebars[index] !== undefined) {
		return sidebars[index];
	}

	return null;
}

export default (context, inject) => {
	inject('utils', {
		sidebar: renderSidebar
	});

	inject('colors', {
		primary: '#1b55e3',
		danger: '#f00'
	});
};
