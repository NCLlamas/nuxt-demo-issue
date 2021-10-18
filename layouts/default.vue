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
          <online-users></online-users>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import SidebarMenu from "~/components/navigation/SidebarMenu.vue"
import onlineUsers from "../components/items/onlineUsers";

export default {
  name: 'App',
  components: {
    onlineUsers,
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
