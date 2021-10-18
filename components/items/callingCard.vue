<template>
  <CFlex w="100%" h="110px" mb="25px" align="center" justify="space-between" rounded="30px" p="25px" shadow="0px 1px 8px 1px rgba(5, 10, 47, 0.15);
  ">
    <CFlex align="center">
      <CAvatar size="lg" :name="name" mr="25px"></CAvatar>
      <CFlex direction="column">
        <CText fontSize="24px" fontWeight="500">{{name}}</CText>
        <CText fontSize="20px" color="rgb(169, 169, 169);
  ">{{contact}}</CText>
      </CFlex>
    </CFlex>
    <slot>
      <CIconButton aria-label="answer-call" icon="phone" size="lg" variant="solid" variant-color="brand" isRound></CIconButton>
    </slot>
  </CFlex>
</template>
<script>
export default {
  name: "callingCard",
  props: {
    avatar: {
      required: false,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    contact: {
      required: true,
      type: String
    },
  }
}
</script>

<style scoped lang="scss">
</style>
