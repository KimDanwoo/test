<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title"><b>정기점검 및 상태이력</b></h5>
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="35%" />
            <col width="35%" />
          </colgroup>
          <thead>
            <tr>
              <th>수정일시</th>
              <th>처리자</th>
              <th>구분</th>
              <th>내용</th>
              <th>처리내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>2020-02-02</p></td>
              <td><p>홍길동(admin)</p></td>
              <td><p>정기점검</p></td>
              <td><p>스프링클러 이상</p></td>
              <td><p>스프링 쿨러 이상 파악 조치</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InspectionStatus',
}
</script>
<style></style>
