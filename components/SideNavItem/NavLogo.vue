<template>
  <div class="sidemenu-logo">
    <NuxtLink class="main-logo" to="/">
      <img
        src="@/assets/img/brand/logo-light.png"
        class="header-brand-img desktop-logo-dark"
        alt="logo"
      />
      <img
        src="@/assets/img/brand/icon-light.png"
        class="header-brand-img icon-logo-dark"
        alt="logo"
      />
      <img
        src="@/assets/img/brand/logo.png"
        class="header-brand-img desktop-logo"
        alt="logo"
      />
      <img
        src="@/assets/img/brand/icon.png"
        class="header-brand-img icon-logo"
        alt="logo"
      />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'NavLogo',
}
</script>

<style></style>
