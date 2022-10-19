<template>
  <ul class="pagination pagination-circled mb-4 mt-1">
    <li class="page-item">
      <a class="page-link" href="javascript:;"
        ><i class="icon ion-ios-arrow-back"></i
      ></a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="javascript:;">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="javascript:;"
        ><i class="icon ion-ios-arrow-forward"></i
      ></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PaginationBox',
}
</script>

<style>
ul.pagination {
  justify-content: center;
  margin: 0 0 30px 0;
}
</style>
