import Vue from 'vue';

Vue.component('role', {
	props: {
		scope: {
			type: String,
			required: true
		}
	},
	template: '<a-tag :color="$colors.danger">{{scope}}</a-tag>'
});

Vue.component('required', {
	props: {
		text: {
			type: String,
			default: 'Necesario'
		}
	},
	template: '<a-tag :color="$colors.danger">{{text}}</a-tag>'
});

Vue.component('error', {
	props: {
		title: {
			type: String,
			default: '🚨 Ten cuidado'
		}
	},
	template: `	<a-alert :message="title" type="error">
					<p slot="description">
						<slot></slot>
					</p>
				</a-alert>`
});

Vue.component('alert', {
	props: {
		title: {
			type: String,
			default: '👓 Recuerda'
		}
	},
	template: `	<a-alert :message="title" type="warning">
					<p slot="description">
						<slot></slot>
					</p>
				</a-alert>`
});

Vue.component('info', {
	props: {
		title: {
			type: String,
			default: '🧠 Debes saber que...'
		}
	},
	template: `	<a-alert :message="title" type="info">
					<p slot="description">
						<slot></slot>
					</p>
				</a-alert>`
});
