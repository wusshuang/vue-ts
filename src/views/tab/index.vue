<template>
  <div id="example-index">
    <h1>this is a example-index page !</h1>

    <Row :gutter="20">
      <Col
        :span="4"
        v-for="(navItem, navIndex) in nav"
        :key="navIndex"
      >
        <Button round >
          <router-link :to="navItem">{{ navItem }}</router-link>
        </Button>
        <i class="el-icon-delete" v-show="navIndex > 0" @click.stop="handleDelete"></i>
      </Col>
    </Row>


    <Button type="primary" @click.stop="handleClick" v-show="nav.length <= 1">B页面</Button>

    <router-view></router-view>
  </div>
</template>


<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Button, Row, Col } from 'element-ui'

  const url = '/tab/b'

  @Component({
    components: {
      Button, Row, Col
    }
  })

  export default class Tab extends Vue {
    private nav: string[] = ['/tab/a']

    private created() {
      if (this.$route.path === url) {
        this.nav.push(url)
      }
    }

    private handleClick() {
      this.$router.push(url)
      this.nav.push(url)
    }

    private handleDelete() {
      this.nav.pop()
      this.$router.push(this.nav[this.nav.length - 1])
    }
  }
</script>
