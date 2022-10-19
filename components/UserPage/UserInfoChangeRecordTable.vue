<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title"><b>회원정보 수정이력</b></h5>
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
              <td><p>2020-01-01</p></td>
              <td><p>홍길동(hong)</p></td>
              <td><p>비밀번호 재설정</p></td>
              <td><p>비밀번호 분실로 인한 고객센터 문의</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoChangeRecordTable',
}
</script>
<style></style>
