<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main" display="flex">
          <CReset />
          <sidebar-menu></sidebar-menu>
          <CBox w="100%" h="calc(100vh - 60px)" my="30px" mr="30px">
            <Nuxt />
          </CBox>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox
} from '@chakra-ui/vue'
import SidebarMenu from "~/components/navigation/SidebarMenu.vue"

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    SidebarMenu
  }
}
</script>
<style scoped>
  .menu-bar {
    background: linear-gradient(180deg, #6154D2 0%, #393B62 100%)
  }
  .sidebar-filler {
    width: 128px;
    height: 100vh;
  }
</style>
