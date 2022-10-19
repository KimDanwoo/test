<template>
  <div class="row">
    <div class="col-10">
      <button class="btn ripple btn-primary">검색</button>
      <button class="btn ripple btn-warning">초기화</button>
    </div>
    <div class="col-2">
      <button
        class="btn ripple btn-success"
        @click="$router.push('/admin/register')"
      >
        계정생성
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerBtnBox',
}
</script>

<style ></style>
