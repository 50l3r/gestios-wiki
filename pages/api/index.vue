<template>
	<div id="swagger-ui" />
</template>

<script>
/* eslint-disable no-undef */

export default {
	mounted() {
		if (process.client) {
			this.swagger();
		}
	},
	methods: {
		swagger() {
			const ui = SwaggerUIBundle({
				url: 'https://gestios.es/swagger.json',
				dom_id: '#swagger-ui',
				presets: [
					SwaggerUIBundle.presets.apis,
					SwaggerUIStandalonePreset
				]
			});

			window.ui = ui;
		}
	},
	head() {
		return {
			title: '🚀 API 1.0 - GestiOS Wiki'
		};
	}
};
</script>

<style lang="less">
	#swagger-ui{
		.swagger-ui>div:first-child{
			display: none;
		}

		.swagger-ui .info {
			margin: 0px 0 50px 0;

			.title{
				padding-top: 1rem;
			}
		}

		table td, table th{
			border: 0;
		}
	}
</style>
