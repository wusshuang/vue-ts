import { Vue, Component } from 'vue-property-decorator'

@Component

export default class SMixin extends Vue {
  mixinMsg: string =  'this is a mixin !'
}
