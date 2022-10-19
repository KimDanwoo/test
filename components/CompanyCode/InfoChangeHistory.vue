<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title"><b>정보 수정이력</b></h5>
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
            <col width="45%" />
          </colgroup>
          <thead>
            <tr>
              <th>수정일시</th>
              <th>처리자</th>
              <th>수정항목</th>
              <th>사유</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>2020-02-02</p></td>
              <td>홍길동(admin)</td>
              <td><p>사업자번호 변경</p></td>
              <td><p>건물 소유 변경에 따른 고객센터문의</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoChangeHistory',
}
</script>
<style></style>
