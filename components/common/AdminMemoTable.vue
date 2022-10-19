<template>
  <div class="card custom-card">
    <div class="card-body">
      <h5 class="card-title">
        <div class="row" style="flex-wrap: nowrap">
          <b style="width: 90%">관리자 메모</b>
          <button
            class="btn btn-primary"
            style="width: 100px"
            @click="$emit('openMemo')"
          >
            메모 작성
          </button>
        </div>
      </h5>
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="15%" />
            <col width="15%" />
            <col width="70%" />
          </colgroup>
          <thead>
            <tr>
              <th>등록일시</th>
              <th>등록자</th>
              <th>메모 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>2020-01-01</p></td>
              <td><p>홍길동(hong)</p></td>
              <td>
                <p>이 회원은 강성유저로 하루 한번씩 전화해서 항의합니다.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMemoTable',
}
</script>
<style></style>
