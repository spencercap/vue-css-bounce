<template>
	<div class="bg" @click="bgClick($event)">
		<div class="box colorful"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
// https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule/deleteRule

export default defineComponent({
	name: 'ClickToCSSTest',
	mounted() {
		console.log('ClickToCSSTest mounted');
	},
	methods: {
		bgClick(e: MouseEvent) {
			console.log('bgClick', e);

			const startX = e.clientX;
			const endX = window.innerWidth / 2; // middle of page


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
					} else if (rule.selectorText == '.animateX') {
						console.log('replacing .animateX');

						// remove old
						sheet.deleteRule(i);

						// add new
						sheet.insertRule(`
							.animateX {
								left: ${startX}px;
							}
						`);
					}
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
										transform: translateX(0%);
									}

									16% {
										transform: translateX(-132.27%);
									}

									28% {
										transform: translateX(-86.88%);
									}

									44% {
										transform: translateX(-104.63%);
									}

									59% {
										transform: translateX(-98.36%);
									}

									73% {
										transform: translateX(-100.58%);
									}

									88% {
										transform: translateX(-99.8%);
									}

									100% {
										transform: translateX(-0%);
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
				// TODO handle state where it had animation class already and wont get anim end then

				console.log('adding animateXElastic');
				boxEl.classList.add('animateXElastic');

				boxEl.onanimationend = () => {
					console.log('removing animateXElastic');
					boxEl.classList.remove('animateXElastic');
					boxEl.onanimationend = null;
				};

				// if (boxEl.classList.contains('animateXElastic')) {
				// 	console.log('has it');
				// }
			}
		}
	}
})
</script>

<style scoped>
.bg {
	background: pink;
	width: 100vw;
	height: 200px;

	cursor: pointer;
}
.box {
	position: absolute;
	left: 100px;
	/* background: grey; */
	width: 100px;
	height: 100px;

	transition: all 1s;
}
</style>