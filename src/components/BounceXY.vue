<template>
	<div
		:class="`box colorful ${dragging ? 'dragging' : ''}`"
		:style="`${
			dragging
				? `transform: translate(${dragXMove}px, ${dragYMove}px)`
				: ''
		}`"
		@mousedown="touchStart($event)"
		@touchstart.prevent="touchStart($event)"
	>
		{{ dragging }}
		<br />
		{{ dragXMove.toFixed(0) }}
		{{ dragYMove.toFixed(0) }}
		<br />
		<br />
		<span>(drag me)</span>
	</div>

	<div class="centerIndicator">+</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
// https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule/deleteRule

export default defineComponent({
	name: 'BounceXY',
	data() {
		return {
			dragging: false,

			// x
			dragXStart: 0,
			dragXMove: 0,
			// y
			dragYStart: 0,
			dragYMove: 0,
		}
	},
	methods: {
		touchStart(e: MouseEvent | TouchEvent) {
			console.log('touchStart', e);
			this.dragging = true;

			if (e.type == 'mousedown') {
				this.dragXStart = (e as MouseEvent).clientX;
				this.dragYStart = (e as MouseEvent).clientY;

				window.onmousemove = (e: MouseEvent) => {
					// console.log('e', e);
					this.dragXMove = e.clientX - this.dragXStart;
					this.dragYMove = e.clientY - this.dragYStart;
				}
				window.onmouseup = this.touchEnd;
				// window.onmouseleave = this.touchEnd;
			} else if (e.type == 'touchstart') {
				this.dragXStart = (e as TouchEvent).touches[0].clientX;
				this.dragYStart = (e as TouchEvent).touches[0].clientY;

				window.ontouchmove = (e: TouchEvent) => {
					this.dragXMove = e.touches[0].clientX - this.dragXStart;
					this.dragYMove = e.touches[0].clientY - this.dragYStart;
				}
				window.ontouchend = this.touchEnd;
			}
		},
		async touchEnd(e: TouchEvent | MouseEvent) {
			console.log('touchEnd', e);
			this.dragging = false;

			window.onmousemove = null;
			window.onmouseup = null;
			// window.onmouseleave = null;
			window.ontouchmove = null;
			window.ontouchend = null;

			await this.$nextTick();

			this.genSpringAnimation(this.dragXMove, this.dragYMove);

			this.dragXStart = 0;
			this.dragXMove = 0;
			this.dragYStart = 0;
			this.dragYMove = 0;
		},
		genSpringAnimation(dx: number, dy: number) {
			console.log('genSpringAnimation', dx, dy);

			const styleTag = document.querySelector('#styleInjection') as undefined | HTMLElement;
			if (styleTag) {

				// CSSStyleSheet
				const sheet = (styleTag as any).sheet as CSSStyleSheet;
				let ruleList = sheet.cssRules;
				// console.log('ruleList', ruleList);

				const rulesArr = [...(ruleList as any)];
				rulesArr.forEach((rule, i) => {
					// console.log('rule', i, rule);

					if (rule.selectorText == '.colorful') {
						// console.log('replacing .colorful');

						// remove old
						sheet.deleteRule(i);

						const randomColor = `hsl(${Math.random() * 360}, 50%, 75%)`
						// console.log('randomColor', randomColor);

						// add new
						sheet.insertRule(`
							.colorful {
								background: ${randomColor};
							}
						`)
					}
					// KEYFRAME ANIMATIONS
					else if (!rule.selectorText) {
						if (rule.name == 'animElasticXY') {
							console.log('replacing animElasticXY');

							// remove old
							sheet.deleteRule(i);

							// add new
							sheet.insertRule(`
								@keyframes animElasticXY {
									0% {
										transform: translate(${(dx * -0.0000) + dx}px, ${(dy * -0.0000) + dy}px);
									}

									16% {
										transform: translate(${(dx * -1.3227) + dx}px, ${(dy * -1.3227) + dy}px);
									}

									28% {
										transform: translate(${(dx * -0.8688) + dx}px, ${(dy * -0.8688) + dy}px);
									}

									44% {
										transform: translate(${(dx * -1.0463) + dx}px, ${(dy * -1.0463) + dy}px);
									}

									59% {
										transform: translate(${(dx * -0.9836) + dx}px, ${(dy * -0.9836) + dy}px);
									}

									73% {
										transform: translate(${(dx * -1.0058) + dx}px, ${(dy * -1.0058) + dy}px);
									}

									88% {
										transform: translate(${(dx * -0.9980) + dx}px, ${(dy * -0.9980) + dy}px);
									}

									100% {
										transform: translate(${(dx * -1.0000) + dx}px, ${(dy * -1.0000) + dy}px);
									}
								}
							`);
							//

						}
					}

				});


			}

			const boxEl = document.querySelector('.box') as undefined | HTMLElement;
			if (boxEl) {
				if (boxEl.classList.contains('animateElasticXY')) {
					console.log('has animateElasticXY already');
					// TODO handle state where it had animation class already and wont get anim end then
				} else {
					console.log('adding animateElasticXY');
					boxEl.classList.add('animateElasticXY');

					boxEl.onanimationend = () => {
						console.log('removing animateElasticXY');
						boxEl.classList.remove('animateElasticXY');
						boxEl.onanimationend = null;
					};
				}
			}

		}
	}
});

</script>

<style scoped>
* {
	user-select: none;
}

.box {
	--width: 100px;
	position: absolute;
	/* set initial position: top, left etc */
	/* top: 0; */
	left: calc(50vw - calc(var(--width) / 2));
	width: var(--width);
	height: var(--width);
	border-radius: 16px;

	cursor: move;
	opacity: 0.75;

	/* transition: all 1s; */
	transition: background 1s, transform 1s;
}
.box.dragging {
	transition: none;
}

.centerIndicator {
	position: relative;
	--width: 20px;
	top: 40px;
	left: calc(50vw - calc(var(--width) / 2));
	width: var(--width);
	height: var(--width);

	line-height: var(--width);
	color: rgba(255, 0, 0, 0.5);
	/* background: pink; */
	pointer-events: none;
	z-index: -1;
}
</style>