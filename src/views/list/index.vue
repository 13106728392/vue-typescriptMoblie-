<template>
  <div class="List">列表</div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";

@Component({
  name: "List",

  components: {}
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
</style>
