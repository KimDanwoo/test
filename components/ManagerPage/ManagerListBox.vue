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
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>아이디</th>
                <th>비밀번호</th>
                <th>관리권한</th>
                <th>생성일</th>
                <th>최종로그인</th>
                <th>정보수정</th>
              </tr>
            </thead>
            <tbody class="point">
              <tr
                v-for="(item, idx) in managerList"
                :key="idx"
                @click="$emit('goDetail', idx)"
              >
                <td class="text-center">
                  <p>{{ item.id }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.name }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.account }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.password }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.permition }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.createdAt }}</p>
                </td>
                <td class="text-center">
                  <p>{{ item.updatedAt }}</p>
                </td>
                <td class="text-center">
                  <button
                    @click="$emit('goDetail', idx)"
                    class="btn btn-primary"
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
  name: 'ManagerListBox',
  props: {
    managerList: {
      type: Array,
    },
  },
}
</script>

<style></style>
