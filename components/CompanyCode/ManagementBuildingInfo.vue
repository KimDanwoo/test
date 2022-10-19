<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title"><b>관리중인 건물 정보</b></h5>
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
            <col width="5%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>건물코드</th>
              <th>건물 구분</th>
              <th>주소</th>
              <th>건물명</th>
              <th>메인 관리자 아이디</th>
              <th>가입일</th>
              <th>결제 유효일</th>
              <th>정보수정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1</p></td>
              <td><p>123-12344</p></td>
              <td><p>단독주택</p></td>
              <td><p>경기도 시흥</p></td>
              <td><p>수원 2차</p></td>
              <td><p>sodof</p></td>
              <td><p>2020-12-23</p></td>
              <td><p>2020-03-04</p></td>
              <th><button class="btn btn-warning">삭제</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagementBuildingInfo',
}
</script>
<style></style>
