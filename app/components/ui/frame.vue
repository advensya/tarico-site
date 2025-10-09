<script lang="ts" setup>
import { VContainer } from "vuetify/components/VGrid";

defineProps({
	hideBorder: { type: Boolean, default: false },
	hideUnlimit: { type: Boolean, default: false },
});

// frame-borders.ts
type FrameItem = HTMLElement;
type FrameContainer = HTMLElement;

interface RowGroup {
	top: number; // offsetTop
	items: FrameItem[]; // éléments sur la même ligne
}

const container = ref<VContainer>();

// Utilitaire: debounce pour resize
function debounce<T extends (...args: any[]) => void>(fn: T, wait = 100) {
	let t: number | undefined;
	return (...args: Parameters<T>) => {
		window.clearTimeout(t);
		t = window.setTimeout(() => fn(...args), wait);
	};
}

function groupItemsByRow(items: FrameItem[]): RowGroup[] {
	const rows: RowGroup[] = [];
	for (const el of items) {
		const top = el.offsetTop;
		// cherche un groupe existant avec le même offsetTop (tolérance)
		const row = rows.find((r) => Math.abs(r.top - top) <= 1);
		if (row) row.items.push(el);
		else rows.push({ top, items: [el] });
	}
	// tri par position verticale
	rows.sort((a, b) => a.top - b.top);
	// tri horizontal dans chaque ligne
	rows.forEach((r) => r.items.sort((a, b) => a.offsetLeft - b.offsetLeft));
	return rows;
}

function resetBorders(items: FrameItem[]) {
	for (const el of items) {
		el.removeAttribute("data-border-top");
		el.removeAttribute("data-border-right");
		el.removeAttribute("data-border-bottom");
		el.removeAttribute("data-border-left");
		el.removeAttribute("data-first-in-row");

		el.querySelector("[data-unlimit-top]")?.remove();
		el.querySelector("[data-unlimit-start]")?.remove();
		el.querySelector("[data-unlimit-end]")?.remove();
	}
}

function computeFrameBorders(frame: FrameContainer) {
	const items = Array.from(
		frame.querySelectorAll<FrameItem>(":scope > .frame")
	);
	if (!items.length) return;

	// Important: forcer un reflow si nécessaire (lecture offsetTop/Left)
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	frame.offsetWidth;

	const rows = groupItemsByRow(items);

	resetBorders(items);

	rows.forEach((row, rowIndex) => {
		const isFirstRow = rowIndex === 0;
		const isLastRow = rowIndex === rows.length - 1;

		row.items.forEach((el, colIndex) => {
			const isFirstInRow = colIndex === 0;
			const isLastInRow = colIndex === row.items.length - 1;

			if (isFirstRow) el.setAttribute("data-border-top", "");

			// if (isLastRow)
			el.setAttribute("data-border-bottom", "");

			if (isFirstInRow) {
				el.setAttribute("data-border-left", "");
				el.setAttribute("data-first-in-row", "");

				const div = document.createElement("div");
				div.setAttribute("data-unlimit-start", "");

				if (isLastRow) div.setAttribute("data-unlimit-start-bottom", "");

				el.appendChild(div);
			}

			if (isLastInRow) {
				const div = document.createElement("div");
				div.setAttribute("data-unlimit-end", "");

				if (isLastRow) div.setAttribute("data-unlimit-end-bottom", "");

				el.appendChild(div);
			}
			el.setAttribute("data-border-right", "");

			if (isFirstRow) {
				if (isFirstInRow) {
					const div = document.createElement("div");
					div.setAttribute("data-unlimit-top", "");
					div.setAttribute("data-unlimit-top-left", "");
					el.appendChild(div);
				}

				if (isLastInRow) {
					const div = document.createElement("div");
					div.setAttribute("data-unlimit-top", "");
					div.setAttribute("data-unlimit-top-right", "");
					el.appendChild(div);
				}
			}
		});
	});
}

function setupFrameBorders() {
	if (!container.value) return;
	const $el = container.value.$el as HTMLDivElement;

	const frames = Array.from($el.querySelectorAll<FrameContainer>(".framer"));
	const applyAll = () => frames.forEach(computeFrameBorders);

	// Initial
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", applyAll, { once: true });
	} else {
		applyAll();
	}

	// Recalcul sur resize (debounced)
	const onResize = debounce(applyAll, 100);
	window.addEventListener("resize", onResize);

	// Recalcul si le contenu change (ex: items ajoutés/supprimés)
	const observer = new MutationObserver(() => applyAll());
	frames.forEach((frame) => {
		observer.observe(frame, {
			childList: true,
			subtree: false,
			attributes: false,
		});
	});

	// Retourne un cleanup si besoin
	return () => {
		window.removeEventListener("resize", onResize);
		observer.disconnect();
	};
}

onMounted(() => {
	setTimeout(() => {
		setupFrameBorders();
	}, 500);
});
</script>

<template>
	<v-container
		ref="container"
		class="ui-frame py-0"
		:class="{ 'hide-border': hideBorder, 'hide-unlimit': hideUnlimit }"
	>
		<slot name="prepend" />

		<v-row class="framer" justify="start" :no-gutters="true">
			<slot />
		</v-row>

		<slot name="append" />
	</v-container>
</template>

<style lang="scss">
.ui-frame {
	--ui-frame-border-color: rgba(var(--v-border-color), 0.2);
	--ui-frame-border: 1px dashed var(--ui-frame-border-color);

	margin-top: 100px;
	margin-bottom: 100px;

	.framer {
		// margin-bottom: 80px;

		.frame {
			// ex: par défaut pleine largeur en mobile
			position: relative;

			&[data-border-top] {
				border-top: var(--ui-frame-border);
			}
			&[data-border-right] {
				border-right: var(--ui-frame-border);
			}
			&[data-border-bottom] {
				border-bottom: var(--ui-frame-border);
			}
			&[data-border-left] {
				border-left: var(--ui-frame-border);
			}

			[data-unlimit-top],
			[data-unlimit-start],
			[data-unlimit-end] {
				position: absolute;
				width: 50px;
				height: 100px;
				pointer-events: none;
			}

			[data-unlimit-start],
			[data-unlimit-end] {
				top: 100%;
				transform: translateY(-50%);

				&[data-unlimit-start] {
					right: 100%;
				}

				&[data-unlimit-end] {
					left: 100%;
				}

				&::before {
					content: "";
					position: absolute;
					top: 50%;
					width: 100%;
					border-top: var(--ui-frame-border);
				}

				&[data-unlimit-start-bottom],
				&[data-unlimit-end-bottom] {
					&::after {
						content: "";
						position: absolute;
						top: 50%;
						height: 50%;
						width: 100%;
					}

					&[data-unlimit-start-bottom] {
						&::after {
							border-right: var(--ui-frame-border);
						}
					}

					&[data-unlimit-end-bottom] {
						&::after {
							border-left: var(--ui-frame-border);
						}
					}
				}
			}

			[data-unlimit-top] {
				bottom: 100%;
				transform: translateY(50%);

				&::before {
					content: "";
					position: absolute;
					bottom: 50%;
					width: 100%;
					border-top: var(--ui-frame-border);
				}

				&::after {
					content: "";
					position: absolute;
					bottom: 50%;
					height: 50%;
					width: 100%;
				}

				&[data-unlimit-top-left] {
					right: 100%;

					&::after {
						border-right: var(--ui-frame-border);
					}
				}
				&[data-unlimit-top-right] {
					left: 100%;

					&::after {
						border-left: var(--ui-frame-border);
					}
				}
			}

			@media (max-width: 992px) {
				[data-unlimit-top],
				[data-unlimit-start],
				[data-unlimit-end] {
					display: none !important;
				}
			}
		}
	}

	&.hide-border {
		.framer {
			// margin-bottom: 80px;

			.frame {
				// ex: par défaut pleine largeur en mobile
				position: relative;
				border-color: transparent !important;

				[data-unlimit-top],
				[data-unlimit-start],
				[data-unlimit-end] {
					display: none !important;
				}
			}
		}
	}

	&.hide-unlimit {
		.framer {
			.frame {
				[data-unlimit-top],
				[data-unlimit-start],
				[data-unlimit-end] {
					display: none !important;
				}
			}
		}
	}
}
</style>
