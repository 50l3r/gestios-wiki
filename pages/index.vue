<template>
	<a-row
		type="flex"
		:class="$style.container"
		justify="center"
		align="middle"
	>
		<a-col>
			<div
				class="mb-xl"
				:class="$style.hero"
			>
				<img src="images/build.png">

				<h1>
					GestiOS
				</h1>

				<h2>Documentación Técnica</h2>
			</div>

			<a-row
				:gutter="[25,25]"
				:class="$style.features"
			>
				<a-col
					:xs="{ span: 24 }"
					:sm="{ span: 24 }"
					:md="{ span: 8 }"
					:lg="{ span: 8 }"
					:xl="{ span: 8}"
					:xxl="{ span: 8}"
				>
					<h2>🚁 Framework</h2>
					<p>
						Trabaja con nuestra plataforma base hecha en VUE
						y desarrolla proyectos web/app con ella.
					</p>
					<n-link to="/framework">
						<a-button
							type="primary"
						>
							Acceder <a-icon type="right" />
						</a-button>
					</n-link>
				</a-col>

				<a-col
					:xs="{ span: 24 }"
					:sm="{ span: 24 }"
					:md="{ span: 8 }"
					:lg="{ span: 8 }"
					:xl="{ span: 8}"
					:xxl="{ span: 8}"
				>
					<h2>🛸 SDK JS</h2>
					<p>
						Libreria de conexion a la API de GestiOS hecha en Javascript.
						Realiza todas las operaciones I/O.
					</p>
					<n-link to="/sdk">
						<a-button
							type="dashed"
							ghost
							disabled
						>
							Acceder <a-icon type="right" />
						</a-button>
					</n-link>
				</a-col>

				<a-col
					:xs="{ span: 24 }"
					:sm="{ span: 24 }"
					:md="{ span: 8 }"
					:lg="{ span: 8 }"
					:xl="{ span: 8}"
					:xxl="{ span: 8}"
				>
					<h2>🚀 API</h2>
					<p>
						Nucleo de GestiOS desde donde se gestiona todo lo relacionado con la plataforma. API 1.0
					</p>
					<n-link to="/api">
						<a-button
							type="primary"
						>
							Acceder <a-icon type="right" />
						</a-button>
					</n-link>
				</a-col>
			</a-row>
		</a-col>
	</a-row>
</template>

<script>
export default {

};
</script>

<style lang="less" module>
	.container{
		max-width: 1024px;
		margin: 0 auto;
		align-self: center;
		padding: 2rem 2.5rem 0 2.5rem;
	}

	.logo{
		margin-bottom: 20px;
	}

	.hero {
		text-align: center;

		h1{
			margin-top: 20px;
			font-size: 4rem;
			line-height: 4.1rem;
			margin-bottom: 0;
			color: var(--primary)
		}

		h2{
			font-weight: 400;
			border: 0;
			color: #4e6e8e;
			padding-top: 0;
		}

		img{
			max-height: 400px;
		}
	}

	.features{
		h2{
			font-size: 1.4rem;
			font-weight: 500;
			color: #4e6e8e;
		}
	}

	@media only screen and (max-width: 767px)  {
		.container{
			padding: 1rem 1.5rem 0 1.5rem;
		}

		.features{
			text-align: center;

			h2{
				text-transform: uppercase;
			}
		}
	}

</style>
