<template>
  <div class="main-header-left">
    <a class="main-header-menu-icon" href="javascript:;" id="mainSidebarToggle">
      <i class="si si-menu" style="font-size: 18px"></i>
    </a>
    <div class="hor-logo">
      <NuxtLink class="main-logo" to="/">
        <img
          src="@/assets/img/brand/logo.png"
          class="header-brand-img desktop-logo"
          alt="logo"
        />
        <img
          src="@/assets/img/brand/logo-light.png"
          class="header-brand-img desktop-logo-dark"
          alt="logo"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeaderLeft',
}
</script>

<style></style>
