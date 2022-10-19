<template>
  <div
    class="main-content"
    :class="{
      'no-padding': true,
      'side-content': $route.name !== 'LoginPage',
    }"
  >
    <div class="main-container container-fluid">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayoutBox',
}
</script>

<style>
.no-padding {
  padding: 0 !important;
}
</style>
