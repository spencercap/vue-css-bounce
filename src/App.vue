<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
	<!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->

	<h2>CSS Bounce!</h2>
	<a href="https://github.com/spencercap/ottens-linr">repo</a>
	<p class="info">
		Computes CSS keyframe animation in JS on dragend. Dynamically updates
		CSS via JS.
		<br />
		<br />
		Why: Simulate some physics + go further than the built in easing
		functions.
	</p>
	<h2>⚛️</h2>

	<div style="height: 120px"></div>

	<BounceXY />
	<!-- <ClickToCSSTest /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import ClickToCSSTest from './components/ClickToCSSTest.vue'
import BounceXY from './components/BounceXY.vue'


export default defineComponent({
	name: 'App',
	components: {
		HelloWorld,
		ClickToCSSTest,
		BounceXY
	}
})
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	user-select: none;
}
html,
body {
	margin: 0;
	overscroll-behavior: none;
}
p.info {
	text-align: left;
	max-width: 400px;
	margin: 0 auto;
	padding: 1em;
}
</style>