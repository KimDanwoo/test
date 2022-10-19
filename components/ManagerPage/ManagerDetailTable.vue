<template>
  <div class="card custom-card">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="5%" />
            <col width="45%" />
            <col width="5%" />
            <col width="45%" />
          </colgroup>
          <tbody>
            <tr>
              <th>관리자 아이디</th>
              <td>
                <p>{{ managerDetail.account }}</p>
              </td>
              <th>관리자 비밀번호</th>
              <td>
                <input
                  class="form-control w-180"
                  :placeholder="managerDetail.password"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <th>관리자 성명</th>
              <td>
                <p>{{ managerDetail.name }}</p>
              </td>
              <th>관리자 권한</th>
              <td style="padding: 2px">
                <div class="form-group">
                  <div class="custom-controls-stacked">
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="user"
                      />
                      <span class="custom-control-label">회원관리</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="fire_company"
                      />
                      <span class="custom-control-label">소방업체</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="building"
                      />
                      <span class="custom-control-label">건물관리</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="content"
                      />
                      <span class="custom-control-label">콘텐츠관리</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="inquiry"
                      />
                      <span class="custom-control-label">문의대응</span>
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>관리자 전화번호</th>
              <td>
                <input
                  class="form-control w-180"
                  :placeholder="managerDetail.phone"
                  type="text"
                />
              </td>
              <th>관리자 소속</th>
              <td>
                <input
                  class="form-control w-180"
                  :placeholder="managerDetail.company"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <th>최초 생설일</th>
              <td>
                <p>{{ managerDetail.createdAt }}</p>
              </td>
              <th>마지막 접속일</th>
              <td>
                <p>{{ managerDetail.updatedAt }}</p>
              </td>
            </tr>
            <tr>
              <th>계정 활동 내역</th>
              <td>
                <div class="row">
                  <input
                    class="form-control w-120"
                    style="margin-left: 8px"
                    type="date"
                  />&ensp;~&ensp;
                  <input class="form-control w-120" type="date" />
                  <button
                    class="btn btn-primary"
                    style="width: 80px; margin-left: 8px"
                    @click="$emit('openActive')"
                  >
                    보기
                  </button>
                </div>
              </td>
              <th>계정 상태 변경</th>
              <td>
                <select
                  name="user[month]"
                  class="form-control w-180 form-select select2"
                  data-bs-placeholder="Select Month"
                  :value="managerDetail.accountStatus"
                >
                  <option :value="true">사용</option>
                  <option :value="false">정지</option>
                </select>
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
  name: 'ManagerDetailTable',
  props: {
    managerDetail: Object,
  },
}
</script>
<style></style>
