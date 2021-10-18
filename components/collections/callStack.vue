<template>
<CFlex direction="column">
  <CHeading as="h3" size="lg" mb="30px" v-if="title">{{title}}</CHeading>
  <calling-card v-for="(item,index) in items" :key="index" :name="item.name" :contact="item.contact">
    <slot v-bind:data="item.callData"></slot>
  </calling-card>
</CFlex>
</template>

<script>
import CallingCard from "../items/callingCard";
export default {
  name: "callStack",
  components: {CallingCard},
  props: {
    title: {
      required: false,
      type: String
    },
    items: {
      required: true,
      type: Array
    }
  },
}
</script>

<style scoped lang="scss">

</style>
