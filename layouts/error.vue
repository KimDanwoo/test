<template>
  <div class="page main-signin-wrapper bg-primary construction">
    <div class="container">
      <div class="construction1 text-center details text-white">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <h1 class="text-white display-1">
              404<span class="tx-20">error</span>
            </h1>
          </div>
          <div class="col-lg-12">
            <h2 class="">페이지를 찾을 수 없습니다.</h2>
            <h6 class="tx-15 mt-3 mb-4 tx-white-7 tx-normal">
              페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.<br />
              입력하신 주소가 정확한지 다시 한 번 확인해주세요.
            </h6>
            <a class="btn ripple btn-success text-center" href="index.html"
              >이전 페이지</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>

<style scoped>
.main-content .container,
.main-content .container-fluid {
  padding: 0px !important;
}
</style>
