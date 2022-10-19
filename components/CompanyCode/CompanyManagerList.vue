<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title"><b>등록된 관리자</b></h5>
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="5%" />
            <col width="10%" />
            <col width="5%" />
            <col width="10%" />
            <col width="5%" />
            <col width="10%" />
            <col width="5%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>구분</th>
              <th>이름</th>
              <th>아이디</th>
              <th>휴대폰번호</th>
              <th>가입일</th>
              <th>최종로그인</th>
              <th>정보수정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1</p></td>
              <td><p>소방업체</p></td>
              <td><p>김관리</p></td>
              <td><p>manager</p></td>
              <td><p>01012341234</p></td>
              <td><p>2020-12-22</p></td>
              <td><p>2020-02-22</p></td>
              <td><p>없음</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyManagerList',
}
</script>
<style scoped></style>
