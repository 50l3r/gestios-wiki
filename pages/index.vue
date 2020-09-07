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
				<logo :class="$style.logo" />

				<h1>
					GestiOS
				</h1>

				<h2>Data Software</h2>
			</div>

			<a-row
				:gutter="[25,25]"
				:class="$style.features"
			>
				<a-col :span="8">
					<h2>Framework</h2>
					<p>
						Trabaja con nuestra plataforma base hecha en VUE
						y desarrolla proyectos web/app con ella.
					</p>
					<n-link to="/framework">
						Acceder
					</n-link>
				</a-col>

				<a-col :span="8">
					<h2>SDK JS</h2>
					<p>
						Libreria de conexion a la API de GestiOS hecha en Javascript.
						Realiza todas las operaciones I/O.
					</p>
					<n-link to="/sdk">
						Acceder
					</n-link>
				</a-col>

				<a-col :span="8">
					<h2>API</h2>
					<p>
						Nucleo de GestiOS desde donde se gestiona todo lo relacionado con la plataforma. API 1.0
					</p>
					<n-link to="/api">
						Acceder
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
		height: 100vh;
		max-width: 960px;
		margin: 0 auto;
		align-self: center;
	}

	.logo{
		margin-bottom: 20px;
	}

	.hero {
		text-align: center;

		h1{
			font-size: 4rem;
			line-height: 4.1rem;
			margin-bottom: 0;
			color: var(--primary)
		}

		h2{
			font-weight: 400;
			border: 0;
			color: #4e6e8e;
		}
	}

	.features{
		h2{
			font-size: 1.4rem;
			font-weight: 500;
			color: #4e6e8e;
		}
	}

</style>
