<template>
  <div class="card custom-card mt-80">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="15%" />
            <col width="15%" />
            <col width="20%" />
            <col width="40%" />
          </colgroup>
          <thead>
            <tr>
              <th>처리자</th>
              <th>수정항목</th>
              <th>수정일</th>
              <th>처리사유(표시방식)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin1</td>
              <td>회원정보</td>
              <td>2020-12-23</td>
              <td>김가 -> 박가</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerActivityHistory',
}
</script>

<style scoped></style>
