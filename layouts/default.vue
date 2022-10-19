<template>
  <div class="page">
    <AppHeaderAndNav v-show="$route.name !== 'LoginPage'" />
    <MainLayoutBox />
  </div>
</template>

<script>
import MainLayoutBox from '@/components/common/MainLayoutBox.vue'
import AppHeaderAndNav from '@/components/common/AppHeaderAndNav.vue'

export default {
  name: 'Default',
  components: { MainLayoutBox, AppHeaderAndNav },
  head() {
    return {
      script: [
        // <!-- Sidebar js -->
        {
          type: 'text/javascript',
          src: 'assets/plugins/sidebar/sidebar.js',
          defer: true,
        },
        // <!-- swither styles js -->
        {
          type: 'text/javascript',
          src: 'assets/js/swither-styles.js',
          defer: true,
        },
        // <!-- Custom js -->
        {
          type: 'text/javascript',
          src: 'assets/js/custom.js',
          defer: true,
        },
        // <!-- Sticky js -->
        {
          type: 'text/javascript',
          src: 'assets/js/sticky.js',
          defer: true,
        },
        // <!-- CHART-CIRCLE JS-->
        {
          type: 'text/javascript',
          src: 'assets/js/circle-progress.min.js',
          defer: true,
        },
        // <!-- Color Theme js -->
        {
          type: 'text/javascript',
          src: 'assets/js/themeColors.js',
          defer: true,
        },
        {
          type: 'text/javascript',
          src: 'assets/plugins/sidemenu/sidemenu.js',
          defer: true,
        },
        {
          type: 'text/javascript',
          src: 'assets/js/index.js',
          defer: true,
        },
      ],
    }
  },
}
</script>

<style></style>
