<template>
	<div :class="$style.error">
		<img src="/images/error.png">

		<h1 :class="$style.h1">
			{{ message }}
		</h1>

		<nuxt-link to="/">
			<a-button
				size="large"
				type="primary"
				ghost
			>
				<a-icon type="home" /> Volver al inicio
			</a-button>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		error: {
			type: Object
		}
	},
	computed: {
		message() {
			if (this.error) {
				switch (this.error.statusCode) {
					case 404:
						return 'Página no encontrada';

					default:
						return 'Ocurrió un error inesperado';
				}
			} else {
				return 'Ocurrió un error inesperado';
			}
		}

	},
	head() {
		return {
			title: `${this.message} - GestiOS Wiki`
		};
	}
};
</script>

<style lang="less" module>
	.error{
		align-self: center;
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: center;
		justify-content: center;

		h1{
			color: var(--dark);
			font-size: 50px;
		}

		img{
			max-height: 500px;
			margin-bottom: 30px;
		}
	}
</style>
