<template>
  <div class="card custom-card">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="8%" />
            <col width="42%" />
            <col width="8%" />
            <col width="42%" />
          </colgroup>
          <thead>
            <tr>
              <th>관리자 아이디</th>
              <th>
                <div class="row">
                  <input
                    class="form-control w-180"
                    placeholder="관리자 아이디"
                    type="text"
                    name="account"
                    :value="newAdminInfo.account"
                    @input="$emit('changeInfo', $event)"
                    style="margin-left: 16px"
                  />
                  <button
                    class="btn btn-primary"
                    style="width: 100px; margin-left: 8px"
                    @click="$emit('accountCheck')"
                  >
                    중복확인
                  </button>
                </div>
                <p class="error">{{ errorMsg.account }}</p>
              </th>
              <th>관리자 비밀번호</th>
              <th>
                <input
                  class="form-control w-180"
                  placeholder="비밀번호 입력"
                  type="text"
                  name="password"
                  :value="newAdminInfo.password"
                  @input="$emit('changeInfo', $event)"
                />
                <p class="error">{{ errorMsg.password }}</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>관리자 성명</th>
              <th>
                <input
                  class="form-control w-180"
                  placeholder="성명 입력"
                  type="text"
                  name="name"
                  :value="newAdminInfo.name"
                  @input="$emit('changeInfo', $event)"
                />
                <p class="error">{{ errorMsg.name }}</p>
              </th>
              <th>관리자 권한</th>
              <th>
                <div class="form-group">
                  <div class="custom-controls-stacked">
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="user"
                        :value="newAdminInfo.permition.user"
                        :checked="newAdminInfo.permition.user"
                        @click="$emit('changeCheckbox', $event)"
                      />
                      <span class="custom-control-label">회원관리</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="fire_company"
                        :value="newAdminInfo.permition.fire_company"
                        :checked="newAdminInfo.permition.fire_company"
                        @click="$emit('changeCheckbox', $event)"
                      />
                      <span class="custom-control-label">소방업체</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="building"
                        :value="newAdminInfo.permition.building"
                        :checked="newAdminInfo.permition.building"
                        @click="$emit('changeCheckbox', $event)"
                      />
                      <span class="custom-control-label">건물관리</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="content"
                        :value="newAdminInfo.permition.content"
                        :checked="newAdminInfo.permition.content"
                        @click="$emit('changeCheckbox', $event)"
                      />
                      <span class="custom-control-label">콘텐츠관리</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="inquiry"
                        :value="newAdminInfo.permition.inquiry"
                        :checked="newAdminInfo.permition.inquiry"
                        @click="$emit('changeCheckbox', $event)"
                      />
                      <span class="custom-control-label">문의대응</span>
                    </label>
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th>관리자 전화번호</th>
              <th>
                <input
                  class="form-control w-180"
                  placeholder="전화번호 입력"
                  type="text"
                  name="phone"
                  :value="newAdminInfo.phone"
                  @input="$emit('changeInfo', $event)"
                />
                <p class="error">{{ errorMsg.phone }}</p>
              </th>
              <th>관리자 소속</th>
              <th>
                <input
                  class="form-control w-180"
                  placeholder="소속 입력"
                  type="text"
                  name="belong"
                  :value="newAdminInfo.belong"
                  @input="$emit('changeInfo', $event)"
                />
                <p class="error">{{ errorMsg.belong }}</p>
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
  name: 'ManagerRegisterTable',
  props: {
    newAdminInfo: {
      type: Object,
      default: () => ({
        account: '',
        password: '',
        name: '',
        permition: {
          user: false,
          fire_company: false,
          building: false,
          content: false,
          inquiry: false,
        },
        phone: '',
        belong: '',
      }),
    },
    errorMsg: {
      type: Object,
      default: () => ({
        account: '',
        password: '',
        name: '',
        phone: '',
        belong: '',
      }),
    },
  },
}
</script>
<style></style>
