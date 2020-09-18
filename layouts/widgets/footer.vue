<template>
	<div :class="$style.footer">
		<b>Copyright © 2020 - GestiOS</b> | Todos los derechos reservados
	</div>
</template>

<script>
export default {
	name: 'WikiFooter'
};
</script>

<style lang="less" module>
	.footer{
		text-align: center;
		padding: 20px;
		margin-top: auto;
		font-size: 12px;
	}
</style>
