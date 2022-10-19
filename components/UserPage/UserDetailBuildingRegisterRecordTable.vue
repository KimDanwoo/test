<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title"><b>건물등록 이력</b></h5>
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <thead>
            <tr>
              <th>수정일시</th>
              <th>건물코드</th>
              <th>호실</th>
              <th>설정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>2020-01-01</p></td>
              <td><p>xxxxxxxx</p></td>
              <td><p>A동 201호</p></td>
              <th><button class="btn btn-primary">번경</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetailBuildingRegisterRecordTable',
}
</script>
<style></style>
