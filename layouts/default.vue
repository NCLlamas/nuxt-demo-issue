<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main" display="flex">
          <CReset />
          <CBox w="100%" h="calc(100vh - 60px)" my="30px" mr="30px">
            <Nuxt />
          </CBox>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>

export default {
  name: 'App',

}
</script>
<style scoped>

</style>
