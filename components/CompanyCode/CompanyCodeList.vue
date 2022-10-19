<template>
  <div>
    <div class="card custom-card mt-80">
      <div class="card-body">
        <div class="row btn-box mb-2">
          <div class="col pt-2">총&ensp;<b>3</b></div>
          <div class="col">
            <select
              class="form-control form-select select2 search-select"
              name="sort_date"
              id="sort_date"
            >
              <option value="1">생성일 ↓</option>
              <option value="1">생성일 ↑</option>
            </select>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
            <colgroup>
              <col width="4%" />
              <col width="10%" />
              <col width="12%" />
              <col width="12%" />
              <col width="34%" />
              <col width="10%" />
              <col width="10%" />
              <col width="4%" />
              <col width="4%" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>업체코드</th>
                <th>업체명</th>
                <th>주소</th>
                <th>사업자번호</th>
                <th>메인 관리자 아이디</th>
                <th>연락처</th>
                <th>가입일</th>
                <th>정보수정</th>
              </tr>
            </thead>
            <tbody class="point">
              <tr
                v-for="(item, idx) in companyList"
                :key="idx"
                @click.stop="$emit('goDetail', idx)"
              >
                <td class="text-center">
                  <p>{{ item.id }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.code }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.companyName }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.address }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.buisnessNumber }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.account }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.phone }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.createdAt }}</p>
                </td>
                <td class="text-center">
                  <button
                    class="btn btn-warning"
                    @click.stop="$emit('openSecession', item)"
                  >
                    탈퇴
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyCodeList',
  props: {
    companyList: {
      type: Array,
    },
  },
}
</script>

<style></style>
