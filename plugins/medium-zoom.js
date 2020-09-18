import Vue from 'vue';
import mediumZoom from 'medium-zoom';

const initAfterMount = () => {
	console.log('pasa');
	mediumZoom('.nuxt-content img[medium-zoom]:not(.medium-zoom-image)');
};

Vue.mixin({
	mounted() {
		initAfterMount();
	}
});
