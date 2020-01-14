<!--
 * @Author: hope-light
 * @Date: 2019-09-16 16:28:46
 * @LastEditors: hope-light
 * @LastEditTime: 2019-10-24 09:48:31
 * @Description: file content
 -->
<template>
  <div id="index">
    <Container>
      <Aside width="200px">
        <Row>
          <Col>
          <h5>自定义颜色</h5>
          <Menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @select="handleSelect" @close="handleClose"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <Submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <MenuItem index="/">Home</MenuItem>
              <Submenu index="1-1">
                <template slot="title">Example</template>
                <MenuItem index="/example/copy-table">CopyTable</MenuItem>
                <MenuItem index="/example/dynamic-query">DynamicQuery</MenuItem>
                <MenuItem index="/example/iconfont">Iconfont</MenuItem>
                <MenuItem index="/example/scss">Scss</MenuItem>
                <MenuItem index="/example/request">Request</MenuItem>
                <MenuItem index="/example/get-vuex">Get Vuex</MenuItem>
                <MenuItem index="/example/set-vuex">Set Vuex</MenuItem>
                <MenuItem index="/example/props">Props</MenuItem>
                <MenuItem index="/example/provied">Provied</MenuItem>
                <MenuItem index="/example/watch">Watch</MenuItem>
                <MenuItem index="/example/computed">Computed</MenuItem>
                <MenuItem index="/example/v-pre">VPre</MenuItem>
                <MenuItem index="/example/mixin-first">MixinFirst</MenuItem>
                <MenuItem index="/example/mixin-second">MixinSecond</MenuItem>
                <MenuItem index="/example/render">render</MenuItem>
                <MenuItem index="/example/ref">Ref</MenuItem>
                <MenuItem index="/example/filter">Filter</MenuItem>
                <MenuItem index="/example/directives">Dsirectives</MenuItem>
                <MenuItem index="/example/next-tick">NextTick</MenuItem>
              </Submenu>
              <Submenu index="1-2">
                <template slot="title">Echarts</template>
                <MenuItem index="/echarts/line-chart">BasiclintChart</MenuItem>
                <MenuItem index="/echarts/force-layout">ForceLayout</MenuItem>
              </Submenu>
              <MenuItem index="/about">About</MenuItem>
            </Submenu>
            <Submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航二</span>
              </template>
              <MenuItem index="/tab/a">页签切换</MenuItem>
            </Submenu>
          </Menu>
          </Col>
        </Row>
      </Aside>
      <Container class="is-vertical">
        <Header>
          Header
          <Button @click="handleExit">退出</Button>
        </Header>
        <Main>
          <router-view></router-view>
        </Main>
      </Container>
    </Container>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
    Prop
  } from "vue-property-decorator"
  import {
    Container,
    Aside,
    Row,
    Header,
    Menu,
    Main,
    Submenu,
    MenuItem,
    Col,
    Button
  } from 'element-ui'
  import { basicModule } from '../config/api'

  @Component({
    components: {
      Container,
      Aside,
      Row,
      Header,
      Menu,
      Main,
      Submenu,
      MenuItem,
      Col,
      Button
    }
  })
  export default class Index extends Vue {
    handleOpen(key: string, keyPath: any[]) {
      console.log(key, keyPath)
    }

    handleSelect(key: string, keyPath: any[]) {
      this.$router.push(key)
    }

    handleClose(key: string, keyPath: any[]) {
      console.log(key, keyPath)
    }

    handleExit() {
      window.token = null
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
</script>

<style lang="scss" scoped>
  .el-container {
    height: 100vh;
  }

  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }

  .el-main {
    background-color: #edfdf4;
    color: #333;
  }
</style>
