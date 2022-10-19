<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title"><b>회원정보 탈퇴정보</b></h5>
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="5%" />
            <col width="45%" />
            <col width="5%" />
            <col width="45%" />
          </colgroup>
          <tbody>
            <tr>
              <th>탈퇴일시</th>
              <td><p>2020-01-01</p></td>
              <th>탈퇴유형</th>
              <td><p>사용자 탈퇴</p></td>
            </tr>
            <tr>
              <th>가입일시</th>
              <td><p>2020-01-01</p></td>
              <th>휴먼계정전환일시</th>
              <td><p>2020-01-01</p></td>
            </tr>
            <tr>
              <th>회원유형</th>
              <td><p>입주자(처리일자:2020-01-01)</p></td>
              <th>비밀번호</th>
              <td><p>-</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSecessionTable',
}
</script>
<style></style>
