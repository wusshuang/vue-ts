<template>
	<div id="vuex">
		<h2>this is a set-vuex page !</h2>

		<div>
			<h2>设置全局 state 中的数据</h2>
			<Button @click="handleRootMessage1">通过 this.$store.state 来设置全局的 rootMessage</Button>
			<br>
			<Button @click="handleRootMessage2">通过 mapMutations 来设置全局的 rootMessage</Button>
			<br>
			<Button @click="handleRootMessage3">通过 this.$store.commit 来设置全局的 rootMessage</Button>
			<br>
			rootMessage -> {{ get_root_message }}
		</div>

		<div>
			<h2>设置 test module state 中的数据</h2>
			<Button @click="handleTestMessage1">通过 this.$store.state 来设置 test module 中的 testMessage</Button>
			<br>
			<Button @click="handleTestMessage2">通过 mapMutations 来设置全局的 rootMessage</Button>
			<br>
			<Button @click="handleTestMessage3">通过 this.$store.commit 来设置全局的 rootMessage</Button>
			<br>
			testMessage -> {{ get_test_message }}
		</div>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Vue
	} from 'vue-property-decorator'
	import {
		State,
		Mutation,
		namespace
	} from 'vuex-class'
	import {
		Button
	} from 'element-ui'
	import TestModule from '@/store/modules/test'

	const testModule = namespace('test')

	@Component({
		components: {
			Button
		}
	})

	export default class SetVuex extends Vue {
		@State('rootMessage') get_root_message!: string
		@State(state => state.test.testMessage) get_test_message!: string

		@Mutation('setRootMessage') setRootMessage!: any
		@testModule.Mutation('setTestMessage') setTestMessage!: any

		handleRootMessage1() {
			this.$store.state.rootMessage = '通过 this.$store.state.rootMessage 方式设置值'
		}

		handleRootMessage2() {
			this.setRootMessage('通过 @Mutation 方式设置值')
		}

		handleRootMessage3() {
			this.$store.commit('setRootMessage', '通过 this.$store.commit 方式设置值')
		}

		handleTestMessage1() {
			this.$store.state.test.testMessage = '通过 this.$store.state.test.testMessage 方式设置值'
		}

		handleTestMessage2() {
			this.setTestMessage('通过 @Mutation 方式设置值')
		}

		handleTestMessage3() {
			this.$store.commit('test/setTestMessage', '通过 this.$store.commit 方式设置值')
		}

		created() {
			// 使用于单个模块所有的数据管理 不适于在多个路由之前连续切换（有问题）
			this.$store.registerModule('test', TestModule)
		}

		beforeDestroy() {
			this.$store.unregisterModule('test')
		}
	}
</script>
