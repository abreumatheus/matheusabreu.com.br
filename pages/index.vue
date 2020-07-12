<template>
	<div id="wrapper">
		<transition name="fade">
			<ProfilePhoto v-if="isPhotoTyped || isFinished"></ProfilePhoto>
		</transition>
		<transition name="fade">
			<h1 v-if="isNameTyped || isFinished">Matheus Abreu</h1>
		</transition>
		<transition name="fade">
			<h2 v-if="isRoleTyped || isFinished">Python / Web Developer</h2>
		</transition>
		<transition name="fade">
			<p v-if="isCompanyTyped || isFinished">HBSIS / AmBev</p>
		</transition>
		<transition name="fade">
			<SocialLinks v-if="isSocialTyped || isFinished"></SocialLinks>
		</transition>
		<br />
		<vue-typer
			v-if="!isFinished"
			caret-animation="blink"
			:repeat="0"
			:erase-on-complete="true"
			erase-style="clear"
			:pre-erase-delay="1000"
			:pre-type-delay="1000"
			:text="codeList[currentIndex]"
			@typed="setNext(currentIndex)"
		></vue-typer>
	</div>
</template>

<script>
import ProfilePhoto from '~/components/ProfilePhoto'
import SocialLinks from '~/components/SocialLinks'

export default {
	components: { ProfilePhoto, SocialLinks },
	data() {
		return {
			isFinished: false,
			currentIndex: 0,
			codeList: [
				'<ProfilePhoto v-if="isPhotoTyped"></ProfilePhoto>',
				'<h1 v-if="isNameTyped">Matheus Abreu</h1>',
				'<h2 v-if="isRoleTyped">Python / Web Developer</h2>',
				'<p v-if="isCompanyTyped">HBSIS / AmBev</p>',
				'<SocialLinks v-if="isSocialTyped"></SocialLinks>',
			],
			isPhotoTyped: false,
			isNameTyped: false,
			isRoleTyped: false,
			isCompanyTyped: false,
			isSocialTyped: false,
		}
	},
	watch: {
		currentIndex(val) {
			if (val === 1) {
				this.isPhotoTyped = true
			} else if (val === 2) {
				this.isNameTyped = true
			} else if (val === 3) {
				this.isRoleTyped = true
			} else if (val === 4) {
				this.isCompanyTyped = true
			}
		},
		isFinished(val) {
			if (val) {
				this.$toast.clear()
				this.$toast.global.reset_animation()
			} else {
				this.$toast.global.skip_animation()
			}
		},
	},
	beforeMount() {
		this.$toast.register('skip_animation', 'Skip Animation?', {
			type: 'info',
			className: 'toast',
			action: {
				text: 'Yes',
				onClick: (e, toastObject) => {
					this.isFinished = true
					toastObject.goAway(0)
				},
			},
		})
		this.$toast.register('reset_animation', 'Reset Animation?', {
			type: 'info',
			className: 'toast',
			action: {
				text: 'Yes',
				onClick: (e, toastObject) => {
					this.isFinished = false
					this.isPhotoTyped = false
					this.isNameTyped = false
					this.isRoleTyped = false
					this.isCompanyTyped = false
					this.isSocialTyped = false
					this.currentIndex = 0
					toastObject.goAway(0)
				},
			},
		})
	},
	mounted() {
		this.$toast.clear()
		this.$toast.global.skip_animation()
	},
	methods: {
		setNext() {
			setTimeout(() => {
				if (this.currentIndex <= 3) {
					this.currentIndex += 1
				} else {
					this.isFinished = true
					this.isSocialTyped = true
				}
			}, 1000)
		},
	},
}
</script>
