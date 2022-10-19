<template>
  <div class="main-header-center">
    <div class="responsive-logo">
      <NuxtLink to="/"
        ><img src="@/assets/img/brand/logo.png" class="mobile-logo" alt="logo"
      /></NuxtLink>
      <NuxtLink to="/"
        ><img
          src="@/assets/img/brand/logo-light.png"
          class="mobile-logo-dark"
          alt="logo"
      /></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeaderCenter',
}
</script>

<style></style>
