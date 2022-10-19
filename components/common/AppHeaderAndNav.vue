<template>
  <div>
    <AppHeader @clickLogout="onClickLogout" />
    <div class="sticky">
      <div class="main-menu main-sidebar main-sidebar-sticky side-menu">
        <div class="main-sidebar-header main-container-1 active">
          <NavLogo />
          <div class="main-sidebar-body main-body-1">
            <SlideLeft />
            <!-- Nav List -->
            <SideNavItemList />
            <SlideRight />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLogo from '../SideNavItem/NavLogo.vue'
import SideNavItemList from '../SideNavItem/SideNavItemList.vue'
import SlideLeft from '../SideNavItem/SlideLeft.vue'
import SlideRight from '../SideNavItem/SlideRight.vue'
import AppHeader from './AppHeader.vue'

export default {
  name: 'SideNav',
  components: {
    NavLogo,
    SideNavItemList,
    SlideLeft,
    SlideRight,
    AppHeader,
  },
  methods: {
    onClickLogout() {
      this.$store.commit('initState')
      this.$router.push('/loginpage')
    },
  },
}
</script>

<style></style>
