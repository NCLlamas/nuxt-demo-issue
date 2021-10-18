<template>
  <c-grid h="92vh" template-columns="repeat(12, 1fr)" gap="0">
    <c-grid-item col-span="7" borderRight="2px solid rgba(74, 70, 144, 0.25)" pt="30px" pr="30px">
      <slot name="left"></slot>
    </c-grid-item>
    <c-grid-item col-start="8" col-end="13" pt="30px" pl="30px">
      <slot name="right"></slot>
    </c-grid-item>
  </c-grid>
</template>

<script>
export default {
  name: "borderedWrapper"
}
</script>

<style scoped lang="scss">

</style>
