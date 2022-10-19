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
              <th>가입일시</th>
              <td>
                <p>{{ userInfo.createdAt }}</p>
              </td>
              <th>최종로그인</th>
              <td>
                <p>{{ userInfo.updatedAt }}</p>
              </td>
            </tr>
            <tr>
              <th>회원구분</th>
              <td>
                <p>{{ userInfo.division }}</p>
              </td>
              <th>휴먼계정전환일시</th>
              <td>{{ userInfo.humanDate }}</td>
            </tr>
            <tr>
              <th>아이디</th>
              <td>
                <p>{{ userInfo.account }}</p>
              </td>
              <th>비밀번호</th>
              <td>
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-180"
                    :placeholder="userInfo.password"
                    type="text"
                  />
                  <button class="btn btn-primary detail-button">변경</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <p>{{ userInfo.name }}</p>
              </td>
              <th>휴대폰번호</th>
              <td>
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-180"
                    :placeholder="userInfo.phone"
                    type="text"
                  />
                  <button class="btn btn-primary detail-button">변경</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>연결된 건물코드</th>
              <td>
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-180"
                    :placeholder="userInfo.buildingCode"
                    type="text"
                    @click="$emit('openBuildingCode', '건물코드')"
                  />
                  <button
                    class="btn btn-primary detail-button"
                    @click="$emit('openBuildingCode', '건물코드')"
                  >
                    변경
                  </button>
                </div>
              </td>
              <th>연결된 소방업체명</th>
              <td>
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-180"
                    :placeholder="userInfo.company"
                    type="text"
                    @click="$emit('openBuildingCode', '소방업체')"
                  />
                  <button
                    class="btn btn-primary detail-button"
                    @click="$emit('openBuildingCode', '소방업체')"
                  >
                    변경
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>접속 플랫폼</th>
              <td>
                <p>{{ userInfo.connectType }}</p>
              </td>
              <th>SMS 수신동의</th>
              <td>
                <p>{{ userInfo.smsAgree ? '수신' : '미수신' }}</p>
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
  name: 'UserDetailTable',
  props: {
    userInfo: {
      type: Object,
    },
  },
}
</script>

<style></style>
