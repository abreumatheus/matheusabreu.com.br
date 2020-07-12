<template>
	<div>
		<Nuxt />
	</div>
</template>

<style>
@import 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap';
:root {
	--color-green: #50fa7b;
}
* {
	margin: 0;
	padding: 0;
	border: 0;
	font-family: 'Roboto', sans-serif;
}
body {
	background: #282a36;
	color: white;
}
.links a {
	color: white;
	font-size: 18px;
	line-height: 28px;
	margin: 0 30px;
	text-decoration: none;
}
.links a:hover {
	color: var(--color-green);
	transition: color 700ms;
}
.profile-img {
	height: auto;
	width: auto;
	max-width: 300px;
	max-height: 300px;
	border-radius: 50%;
	border: solid var(--color-green);
	margin-bottom: 32px;
}
#wrapper {
	text-align: center;
	padding: 32px;
}
#wrapper h1 {
	font-size: 42px;
	line-height: 52px;
	font-weight: bold;
}
#wrapper h2 {
	font-size: 24px;
	line-height: 34px;
	font-weight: normal;
	opacity: 0.8;
}
#wrapper p {
	margin: 5px;
}
.social a {
	margin: 0 10px;
	border-bottom: solid 1px var(--color-green);
	line-height: 42px;
}
.toast {
	background-color: #282a36 !important;
	border: solid 1px var(--color-green);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5) !important;
}
.toast a {
	color: var(--color-green) !important;
}
.vue-typer {
	font-family: monospace;
}
.vue-typer .custom.char.typed {
	font-size: 24px;
	background-color: #1e1e1e;
	color: white;
}
.vue-typer .custom.caret {
	width: 10px;
	height: 28px;
	position: absolute;
	background-color: var(--color-green);
}
.vue-typer .custom.caret.typing {
	background-color: var(--color-green);
}
@keyframes scale-in-center {
	0% {
		transform: scale(0);
		opacity: 1;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}

.fade-enter-active {
	animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>
