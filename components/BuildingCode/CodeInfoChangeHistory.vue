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
            <col width="55%" />
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
              <td><p>2020-01-02</p></td>
              <td><p>홍길동(aoiskjs)</p></td>
              <td><p>사업자번호 변경</p></td>
              <td><p>건물 소유 변경에 따른 고객센터 문의</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeInfoChangeHistory',
}
</script>
<style></style>
