<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title"><b>입주자 정보</b></h5>
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="5%" />
            <col width="15%" />
            <col width="5%" />
            <col width="10%" />
            <col width="15%" />
            <col width="15%" />
            <col width="5%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>입주동</th>
              <th>호실</th>
              <th>입주자명</th>
              <th>휴대폰번호</th>
              <th>등록일</th>
              <th>입주자연결</th>
              <th>정보수정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1</p></td>
              <td><p>A동</p></td>
              <td><p>202호</p></td>
              <td><p>김가</p></td>
              <td><p>010-0202-0202</p></td>
              <td><p>2020-01-02</p></td>
              <td><p>미가입</p></td>
              <th>
                <button
                  class="btn btn-primary"
                  @click="$emit('openTanantInfo')"
                >
                  수정
                </button>
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
  name: 'TanantInfo',
}
</script>
<style></style>
