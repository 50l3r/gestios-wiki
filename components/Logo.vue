<template>
	<div :class="[$style.logo, $style[color]]">
		<img
			v-if="icon"
			:src="'/images/logo/logo-' + color + '.png'"
			:width="size+'px'"
			alt="GestiOS"
		>
		<div
			v-if="text"
			:class="{ 'ml-0': !icon }"
		>
			<div :class="[$style.title, $style[color]]">
				GestiOS
			</div>
			<div :class="[$style.subtitle, $style[color]]">
				Wiki Docs
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		icon: {
			type: Boolean,
			default: true
		},
		text: {
			type: Boolean,
			default: true
		},
		dark: {
			type: Boolean,
			default: null
		},
		size: {
			type: Number,
			default: 48
		}
	},
	computed: {
		color() {
			let color = 'white';
			if (this.dark === null) {
				color = 'dark';
			} else {
				color = this.dark ? 'dark' : 'white';
			}

			return color;
		}
	}
};
</script>

<style lang="less" module>
.logo {
	display: flex;
	align-items: center;
}

.title {
	font-size: 21px;
	font-weight: bold;
	text-transform: uppercase;
	line-height: 21px;
	color: var(--dark);
}

.title.dark {
	color: white;
}

.subtitle {
	font-size: 13px;
}

.subtitle.dark {
	color: white;
}
</style>
