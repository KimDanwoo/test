<template>
  <ul class="menu-nav nav">
    <li
      :class="{
        'nav-item': true,
        active: $route.path.split('/')[1] === item.link.replace('/', ''),
      }"
      v-for="(item, idx) in navList"
      :key="idx"
    >
      <a class="nav-link with-sub" href="javascript:;" v-if="item.child">
        <i
          :class="item.icon"
          style="font-size: 18px; margin-right: 26px; margin-left: 8px"
        />
        <span class="sidemenu-label">{{ item.name }}</span>
        <i class="angle fe fe-chevron-right"></i>
      </a>
      <NuxtLink class="nav-link with-sub" :to="item.link" v-else>
        <i
          :class="item.icon"
          style="font-size: 18px; margin-right: 26px; margin-left: 8px"
        />
        <span class="sidemenu-label"> {{ item.name }}</span></NuxtLink
      >
      <ul class="nav-sub open" v-if="item.child">
        <li v-for="(data, index) in item.child" :key="index">
          <NuxtLink class="nav-sub-link" :to="data.link">{{
            data.name
          }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import navItem from '@/data/navList.json'

export default {
  name: 'SideNavItemList',
  data() {
    return {
      navList: navItem.data,
    }
  },
}
</script>

<style scoped>
.side-menu .nav-item {
  margin: 0px;
}
.main-sidebar-body li.nav-item.active .nav-link,
.main-sidebar-body li.nav-item.active .nav-link.with-sub {
  margin: 0px auto !important;
  padding: 14px 4px !important;
}
.main-sidebar-body li.nav-item .nav-link,
.main-sidebar-body li.nav-item .nav-link.with-sub {
  margin: 0px auto !important;
  padding: 14px 4px !important;
}
</style>
