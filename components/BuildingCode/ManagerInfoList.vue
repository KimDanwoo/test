<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title"><b>건물화제안전관리자 정보</b></h5>
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
            <col width="10%" />
            <col width="10%" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>구분</th>
              <th>이름</th>
              <th>아이디</th>
              <th>비번</th>
              <th>휴대폰번호</th>
              <th>가입일</th>
              <th>최종로그인</th>
              <th>정보수정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1</p></td>
              <td><p>책임</p></td>
              <td><p>박병록</p></td>
              <td><p>sodfosa</p></td>
              <td><p>12341</p></td>
              <td><p>010-1011-2222</p></td>
              <td><p>2020-02-03</p></td>
              <td><p>2020-02-03</p></td>
              <th>
                <button class="btn btn-warning mx-2">책임자 지정</button
                ><button class="btn btn-primary">수정</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerInfoList',
}
</script>
<style></style>
