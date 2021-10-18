<template>
<CFlex direction="column">
  <CFlex wrap="nowrap" align="center">
    <CText fontSize="24px" fontWeight="500">{{name}}</CText>
    <CAvatar ml="10px" :name="name" size="sm"></CAvatar>
  </CFlex>
  <CText align="right" fontSize="20px" color="rgb(169, 169, 169)">{{handledTime}}</CText>
</CFlex>
</template>

<script>
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
dayjs.extend(duration)

export default {
  name: "activeCallData",
  props: {
    avatar: {
      required: false,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    timestamp: {
      required: true,
      type: String
    },
  },
  data() {
    return {
      timerInterval: null,
      relTime: 0,
    }
  },
  computed: {
    handledTime() {
      return dayjs.duration(this.relTime,'s').format('mm:ss')
    }
  },
  methods: {
    startCount() {
      this.relTime = dayjs().diff(this.timestamp,'seconds')
      this.timerInterval = setInterval(() => (this.relTime += 1), 1000)
    }
  },
  mounted() {
    this.startCount()
  },
  beforeDestroy() {
    clearInterval(this.timerInterval)
  }
}
</script>

<style scoped lang="scss">

</style>
