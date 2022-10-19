<template>
  <div class="main-header side-header sticky">
    <div class="main-container container-fluid">
      <MainHeaderLeft />
      <MainHeaderCenter />
      <!-- logout And Ararm -->
      <MainHeaderRight @logout="$emit('clickLogout')" />
    </div>
  </div>
</template>

<script>
import MainHeaderLeft from '../AppHeaderItem/MainHeaderLeft.vue'
import MainHeaderCenter from '../AppHeaderItem/MainHeaderCenter.vue'
import MainHeaderRight from '../AppHeaderItem/MainHeaderRight.vue'

export default {
  name: 'AppHeader',
  components: { MainHeaderLeft, MainHeaderCenter, MainHeaderRight },
}
</script>

<style></style>
