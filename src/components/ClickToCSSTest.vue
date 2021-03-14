<template>
	<div class="bg" @click="bgClick($event)">
		<div class="box colorful"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ClickToCSSTest',
	// props: {
	// 	msg: {
	// 		type: String,
	// 		required: true
	// 	}
	// },
	mounted() {
		console.log('ClickToCSSTest mounted');
	},
	methods: {
		bgClick(e: MouseEvent) {
			console.log('bgClick', e);

			const startX = e.clientX;
			const endX = window.innerWidth / 2; // middle of page


			// const styleTag = document.createElement('style');
			const styleTag = document.querySelector('#styleInjection') as undefined | HTMLElement;
			if (styleTag) {
				// styleTag.innerText = `
				// 	.colorful {
				// 		background: ${randomColor} !important;
				// 	}
				// `;

				// CSSStyleSheet
				const sheet = (styleTag as any).sheet as CSSStyleSheet;
				let ruleList = sheet.cssRules;
				// console.log('ruleList', ruleList);

				// for (let rule of ruleList)
				const rulesArr = [...(ruleList as any)];
				rulesArr.forEach((rule, i) => {
					console.log('rule', i, rule);

					if (rule.selectorText == '.colorful') {
						console.log('found colorful');

						// remove old
						sheet.deleteRule(i);

						const randomColor = `hsl(${Math.random() * 360}, 50%, 75%)`
						console.log('randomColor', randomColor);

						// add new
						sheet.insertRule(`
							.colorful {
								background: ${randomColor} !important;
							}
						`)
					}
				});

				// keyframes.deleteRule('to');
			}


			// document.body.appendChild(styleTag);

			// const boxEl = document.querySelector('.box') as undefined | HTMLElement;
			// if (boxEl) {
			// 	boxEl.classList.add('colorful');
			// }
		}
	}
})
</script>

<style scoped>
.bg {
	background: pink;
	width: 100vw;
	height: 200px;
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

<style>
.anim {
	animation: easeOutElastic 1s forwards;
}

@keyframes easeOutElastic {
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
		transform: translateX(-100%);
	}
}
</style>