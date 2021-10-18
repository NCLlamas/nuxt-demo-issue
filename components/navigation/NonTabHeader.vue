<template>
  <CBox pb="22px" borderBottom="2px solid rgba(74, 70, 144, 0.25)">
    <CHeading as="h3" size="lg" v-if="title">{{title}}</CHeading>
  </CBox>
</template>

<script>
export default {
  name: "NonTabHeader",
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped lang="scss">

</style>
