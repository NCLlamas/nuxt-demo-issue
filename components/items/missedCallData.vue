<template>
<CFlex direction="column" align="flex-end" justify="center">
  <CText fontSize="24px" fontWeight="500">{{handledDate}}</CText>
  <CText align="right" fontSize="20px" color="rgb(169, 169, 169)">{{handledTime}}</CText>
</CFlex>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "missedCallData",
  props: {
    timestamp: {
      required: true,
      type: String
    },
  },
  computed: {
    handledDate() {
      return dayjs(this.timestamp).format('MMM D')
    },
    handledTime() {
      return dayjs(this.timestamp).format('mm:ss A')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
