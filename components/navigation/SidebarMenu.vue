<template>
  <CBox class="menu-bar" rounded="16px" w="88px" h="calc(100vh - 60px)" m="30px">
    <CFlex h="100%" direction="column" justify="space-between" align="center" w="88px">
      <CBox mt="20px">
        <CIcon name="logo" color="white" size="48px"></CIcon>
        <CDivider orientation="horizontal" color="gray.200" mt="15px"></CDivider>
      </CBox>
      <CFlex direction="column">
        <n-link to="/queue" class="nuxt-link-custom">
          <Icon class="nav-icon" color="white" size="48px">
            <HomeOutline></HomeOutline>
          </Icon>
        </n-link>
        <n-link to="/settings" class="nuxt-link-custom">
          <Icon class="nav-icon" color="white" size="48px">
            <SettingsOutline></SettingsOutline>
          </Icon>
        </n-link>
        <n-link to="/availability" class="nuxt-link-custom">
          <Icon class="nav-icon" color="white" size="48px">
            <CalendarOutline></CalendarOutline>
          </Icon>
        </n-link>
      </CFlex>
      <CBox mb="20px">
        <CDivider orientation="horizontal" color="gray.200" mb="15px"></CDivider>
        <CAvatar></CAvatar>
      </CBox>
    </CFlex>
  </CBox>
</template>

<script>
import {HomeOutline, CalendarOutline, SettingsOutline } from "@v2icons/ionicons5"
import { Icon } from '@v2icons/utils'

export default {
  name: "sidebarMenu",
  components: {
    Icon,
    HomeOutline,
    CalendarOutline,
    SettingsOutline
  }
}
</script>

<style scoped lang="scss">
  .nuxt-link-custom {
    padding: 10px 0;
    &:not(.nuxt-link-exact-active) {
      &:hover::after {
        content: "";
        position: fixed;
        left: 30px;
        width: 88px;
        height: 72px;
        min-height: 72px;
        background: rgba(255,255,255,0.2);
        transition: all 200ms;
        margin-top: -10px;
      }
    }
  }
  .nuxt-link-exact-active .nav-icon {
    background: none !important;
    color: #6154D2 !important;
    svg {
      z-index: 1;
    }
  &::after {
     content: "";
     position: fixed;
     left: 30px;
     width: 94px;
     height: 72px;
     min-height: 72px;
     border-radius: 0 8px 8px 0;
     background: white;
     transition: all 200ms;
     box-shadow: 0px 1px 8px 1px rgba(5, 10, 47, 0.15);
    margin-top: -10px;
   }
  }
</style>
