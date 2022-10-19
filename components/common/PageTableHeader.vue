<template>
  <div class="page-header">
    <div>
      <h3 class="main-content-title tx-24 mg-b-5">{{ title }}</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          {{ subTitle }}
        </li>
        <li
          :class="{
            'breadcrumb-item': true,
            active: active === 2,
            'curser-point': active === 3,
          }"
          aria-current="page"
          @click="active === 3 && $router.go(-1)"
        >
          {{ currentTitle }}
        </li>
        <li
          :class="{ 'breadcrumb-item': true, active: active === 3 }"
          aria-current="page"
          v-if="detailTitle"
        >
          {{ detailTitle }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTableHeader',
  props: {
    title: String,
    subTitle: String,
    currentTitle: String,
    detailTitle: String,
    active: Number,
  },
}
</script>

<style>
.breadcrumb {
  margin-left: 12px;
  margin-top: 20px;
}
.curser-point {
  cursor: pointer;
}
</style>
