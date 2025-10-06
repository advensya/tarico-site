<template>
	<div class="ui-hero-back-wall">
		<div class="blurb-left">
			<div v-for="i in 50" :key="i" class="aspect-square">
				<div class="before"></div>
			</div>
		</div>

		<div class="blurb-right">
			<div v-for="i in 50" :key="i" class="aspect-square">
				<div class="before"></div>
			</div>
		</div>

		<div class="gradient"></div>
	</div>
</template>

<style lang="scss">
.ui-hero-back-wall {
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: calc(100%);
	z-index: 0;
	// display: flex;

	&.mask {
		background: rgb(var(--v-theme-surface), 0.01);
		-webkit-mask: url("/images/grid.svg") center/cover no-repeat;
		mask: url("/images/grid.svg") center/cover no-repeat;
	}

	.blurb-right,
	.blurb-left {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: flex;
		overflow: hidden;

		.aspect-square {
			position: relative;
			height: 100%;

			.before {
				// background-color: #d6ff62;
				// opacity: 0.75;
				height: 100%;
				width: 70px;
				--tw-backdrop-blur: blur(25px);
				--tw-gradient-to: color-mix(
					in oklab,
					hsl(var(--background)) 0%,
					transparent
				);

				background-image: linear-gradient(var(--tw-gradient-stops));

				// --tw-gradient-from: color-mix(
				// 	in oklab,
				// 	hsl(var(--background)) 80%,
				// 	transparent
				// );
			}
		}
	}

	.blurb-left {
		left: 0;

		.aspect-square {
			.before {
				backdrop-filter: var(--tw-backdrop-blur);
				--tw-gradient-position: to left in oklab;
				--tw-gradient-stops: var(
					--tw-gradient-via-stops,
					to right in oklab,
					color-mix(in oklab, transparent 80%, transparent) 0%,
					rgba(var(--v-theme-on-background), 0.1) 100%
				);
			}
		}
	}
	.blurb-right {
		right: 50%;
		display: none;

		.aspect-square {
			.before {
				--tw-gradient-stops: var(
					--tw-gradient-via-stops,
					to right in oklab,
					color-mix(in oklab, transparent 80%, transparent) 0%,
					rgba(var(--v-theme-on-background), 0.15) 100%
				);
			}
		}
	}

	.gradient {
		position: absolute;
		inset: 0;
		z-index: 1;
		display: none;

		&::before {
			content: "";
			background: radial-gradient(
				circle,
				rgba(var(--v-theme-background), 0.45) 0%,
				rgba(var(--v-theme-background), 1) 100%
			);
			position: absolute;
			inset: 0;
		}
	}

	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(var(--v-theme-background), 1) 10%,
			rgba(var(--v-theme-background), 0) 100%
		);
	}
}

html.dark .ui-hero-back-wall {
	&.mask {
		opacity: 0.6;
	}

	.blurb-left {
		.aspect-square {
			.before {
				--tw-gradient-stops: var(
					--tw-gradient-via-stops,
					to left in oklab,
					color-mix(in oklab, transparent 80%, transparent) 0%,
					rgba(var(--v-theme-on-background), 0.1) 100%
				);
			}
		}
	}

	&::after {
		background: linear-gradient(
			to top,
			rgba(var(--v-theme-background), 1) 30%,
			rgba(var(--v-theme-background), 0) 100%
		);
	}
}
</style>
