<template>
  <div>
    <div class="card custom-card mt-80">
      <div class="card-body">
        <div class="row btn-box mb-2">
          <div class="col pt-2">
            총&ensp;<b>{{ userList.length }}</b>
          </div>
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
              <col width="16%" />
              <col width="16%" />
              <col width="16%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>아이디</th>
                <th>회원구분</th>
                <th>휴대폰번호</th>
                <th>가입일</th>
                <th>최종로그인</th>
                <th>정보수정</th>
              </tr>
            </thead>
            <tbody class="point">
              <tr
                v-for="(item, idx) in userList"
                :key="idx"
                @click.stop="$emit('goDetail', idx)"
              >
                <td class="text-center">{{ item.id }}</td>
                <td class="text-center">{{ item.name }}</td>
                <td class="text-center">{{ item.account }}</td>
                <td class="text-center">{{ item.division }}</td>
                <td class="text-center">{{ item.phone }}</td>
                <td class="text-center">{{ item.createdAt }}</td>
                <td class="text-center">{{ item.updatedAt }}</td>
                <td class="text-center">
                  <button
                    class="btn btn-warning"
                    @click.stop="$emit('setSecessionUser', item)"
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
  name: 'UserListTable',
  props: {
    userList: {
      type: Array,
    },
  },
}
</script>

<style></style>
