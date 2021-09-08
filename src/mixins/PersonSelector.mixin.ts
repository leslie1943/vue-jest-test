import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class PersonSelector extends Vue {
  code = 0
  name = ''
  people = [
    { code: 1, name: 'leslie' },
    { code: 2, name: 'dora' },
    { code: 3, name: 'mark' },
  ]

  @Watch('code')
  getName(): string {
    const name = this.people.find((item) => item.code === this.code)?.name ?? ''
    this.name = name
    return name
  }
  setCode(val: number) {
    this.code = val
  }
}
