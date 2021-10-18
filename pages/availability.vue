<template>
  <CBox>
    <non-tab-header title="Availability"></non-tab-header>
    <bordered-wrapper>
      <availability-selector slot="left"></availability-selector>
    </bordered-wrapper>
  </CBox>
</template>

<script>
import NonTabHeader from "../components/navigation/NonTabHeader";
import BorderedWrapper from "../components/wrappers/borderedWrapper";
import availabilitySelector from "../components/collections/availabilitySelector";
export default {
  name: "settings",
  components: {BorderedWrapper, NonTabHeader, availabilitySelector}
}
</script>

<style scoped lang="scss">

</style>
