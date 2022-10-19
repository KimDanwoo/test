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
              <col width="30%" />
              <col width="16%" />
              <col width="10%" />
              <col width="10%" />
              <col width="4%" />
              <col width="4%" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>건물코드</th>
                <th>건물구분</th>
                <th>주소</th>
                <th>건물명</th>
                <th>메인 관리자 아이디</th>
                <th>가입일</th>
                <th>결제 유효일</th>
                <th>정보수정</th>
              </tr>
            </thead>
            <tbody class="point">
              <tr
                v-for="(item, idx) in buildingList"
                :key="idx"
                @click="$emit('goDetail', idx)"
              >
                <td class="text-center">
                  <p>{{ item.id }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.code }}</p>
                </td>
                <td class="text-center">
                  <p>{{ buildingTypeName(item.buildingType) }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.address }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.name }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.account }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.createdAt }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.paymentedAt }}</p>
                </td>
                <td class="text-center">
                  <button
                    class="btn btn-primary"
                    @click="$emit('goDetail', idx)"
                  >
                    수정
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
  name: 'BuildingCodeList',
  props: {
    buildingList: {
      type: Array,
    },
  },
  methods: {
    buildingTypeName(type) {
      let name
      switch (type) {
        case 1:
          name = '특급'
          break
        case 2:
          name = '임시소방'
          break
        case 3:
          name = '3급'
          break
        case 4:
          name = '2급'
          break
        case 5:
          name = '1급'
          break
        default:
          break
      }
      return name
    },
  },
}
</script>

<style></style>
