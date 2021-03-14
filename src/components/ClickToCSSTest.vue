<template>
	<div class="bg" xxclick="bgClick($event)">
		<div
			:class="`box colorful ${dragging ? 'dragging' : ''}`"
			:style="`${
				dragging
					? `transform: translateX(calc(${dragXMove}px - 50%))`
					: ''
			}`"
			@mousedown="touchStart($event)"
			@touchstart.prevent="touchStart($event)"
		>
			{{ dragging }}
			<br />
			{{ dragXMove }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
// https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule/deleteRule

export default defineComponent({
	name: 'ClickToCSSTest',
	data() {
		return {
			dragging: false,

			// x
			dragXStart: 0,
			dragXMove: 0,
			// dragY: 0
		}
	},
	mounted() {
		console.log('ClickToCSSTest mounted');
	},
	methods: {
		touchStart(e: MouseEvent | TouchEvent) {
			console.log('touchStart', e);
			this.dragging = true;


			if (e.type == 'mousedown') {
				this.dragXStart = (e as MouseEvent).clientX;

				window.onmousemove = (e: MouseEvent) => {
					// console.log('e', e);
					this.dragXMove = e.clientX - this.dragXStart;
				}
				window.onmouseup = this.touchEnd;
			} else if (e.type == 'touchstart') {
				this.dragXStart = (e as TouchEvent).touches[0].clientX;

				window.ontouchmove = (e: TouchEvent) => {
					this.dragXMove = e.touches[0].clientX - this.dragXStart;
				}
				window.ontouchend = this.touchEnd;
				// support ontouchleave + mouseleave?
			}
		},
		async touchEnd(e: TouchEvent | MouseEvent) {
			console.log('touchEnd', e);
			this.dragging = false;

			window.onmousemove = null;
			window.onmouseup = null;
			window.ontouchmove = null;
			window.ontouchend = null;

			await this.$nextTick();

			this.genSpringAnimation(this.dragXMove);

			this.dragXStart = 0;
			this.dragXMove = 0;
		},
		genSpringAnimation(dx: number) {
			console.log('genSpringAnimation');
			const diffX = dx;

			const styleTag = document.querySelector('#styleInjection') as undefined | HTMLElement;
			if (styleTag) {

				// CSSStyleSheet
				const sheet = (styleTag as any).sheet as CSSStyleSheet;
				let ruleList = sheet.cssRules;
				// console.log('ruleList', ruleList);

				// for (let rule of ruleList)
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
					// else if (rule.selectorText == '.animateX') {
					// 	console.log('replacing .animateX');

					// 	// remove old
					// 	sheet.deleteRule(i);

					// 	// add new
					// 	sheet.insertRule(`
					// 		.animateX {
					// 			left: ${startX}px;
					// 		}
					// 	`);
					// }
					// KEYFRAME ANIMATIONS
					else if (!rule.selectorText) {
						if (rule.name == 'animationXElastic') {
							console.log('replacing animationXElastic');

							// remove old
							sheet.deleteRule(i);

							// add new
							sheet.insertRule(`
								@keyframes animationXElastic {
									0% {
										transform: translateX(calc(${(diffX * -0.0000) + diffX}px - 50%));
									}

									16% {
										transform: translateX(calc(${(diffX * -1.3227) + diffX}px - 50%));
									}

									28% {
										transform: translateX(calc(${(diffX * -0.8688) + diffX}px - 50%));
									}

									44% {
										transform: translateX(calc(${(diffX * -1.0463) + diffX}px - 50%));
									}

									59% {
										transform: translateX(calc(${(diffX * -0.9836) + diffX}px - 50%));
									}

									73% {
										transform: translateX(calc(${(diffX * -1.0058) + diffX}px - 50%));
									}

									88% {
										transform: translateX(calc(${(diffX * -0.9980) + diffX}px - 50%));
									}

									100% {
										transform: translateX(calc(${(diffX * -1.0000) + diffX}px - 50%));
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
				if (boxEl.classList.contains('animateXElastic')) {
					console.log('has animateXElastic already');
					//
					// TODO handle state where it had animation class already and wont get anim end then
				} else {
					console.log('adding animateXElastic');
					boxEl.classList.add('animateXElastic');

					boxEl.onanimationend = () => {
						console.log('removing animateXElastic');
						boxEl.classList.remove('animateXElastic');
						boxEl.onanimationend = null;
					};
				}
			}

		},
		bgClick(e: MouseEvent) {
			console.log('bgClick', e);
			// this.genSpringAnimation(e);
		}
	}
});

// if (rule.name == 'animationXElastic') {
	// 	console.log('replacing animationXElastic');

	// 	// remove old
	// 	sheet.deleteRule(i);

	// 	// add new
	// 	sheet.insertRule(`
	// 		@keyframes animationXElastic {
	// 			0% {
	// 				transform: translateX(0%);
	// 			}

	// 			16% {
	// 				transform: translateX(-132.27%);
	// 			}

	// 			28% {
	// 				transform: translateX(-86.88%);
	// 			}

	// 			44% {
	// 				transform: translateX(-104.63%);
	// 			}

	// 			59% {
	// 				transform: translateX(-98.36%);
	// 			}

	// 			73% {
	// 				transform: translateX(-100.58%);
	// 			}

	// 			88% {
	// 				transform: translateX(-99.8%);
	// 			}

	// 			100% {
	// 				transform: translateX(-0%);
	// 			}
	// 		}
	// 	`);
	// 	//

// }
</script>

<style scoped>
.bg {
	background: pink;
	width: 100vw;
	height: 200px;
	padding: 10px 0;
}
.box {
	position: absolute;
	left: 50vw;
	/* background: grey; */
	width: 100px;
	height: 100px;
	border-radius: 24px;
	cursor: pointer;

	transform: translateX(-50%);

	transition: all 1s;
}
.box.dragging {
	transition: none;
}
</style>