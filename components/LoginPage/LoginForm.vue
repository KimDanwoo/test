<template>
  <div class="col-md-12">
    <div class="card border-0">
      <div class="row row-sm">
        <div class="login_form rounded-start-11">
          <div class="container-fluid">
            <div class="row row-sm">
              <div class="card-body mt-2 mb-2">
                <div class="clearfix"></div>
                <form>
                  <h2 class="text-start mb-2 text-center pt-25">로그인</h2>
                  <div class="panel desc-tabs border-0 p-0">
                    <div class="panel-body tabs-menu-body mt-2">
                      <div class="tab-content">
                        <div class="tab-pane active" id="tab01">
                          <div class="form-group text-start">
                            <label class="tx-medium">관리자 ID</label>
                            <input
                              class="form-control"
                              placeholder="아이디를 입력해주세요"
                              autocomplete="account"
                              type="text"
                              id="id"
                              name="id"
                              :value="loginInfo.id"
                              @input="$emit('changeInput', $event)"
                              @focus="$emit('resetError', $event)"
                            />
                          </div>
                          <p class="error login">{{ errorMsg.id }}</p>
                          <div class="form-group text-start">
                            <label class="tx-medium">관리자 PASSWORD</label>
                            <input
                              class="form-control border-end-0"
                              placeholder="비밀번호를 입력해주세요"
                              type="password"
                              autocomplete="new-password"
                              data-bs-toggle="password"
                              id="password"
                              name="password"
                              :value="loginInfo.password"
                              @input="$emit('changeInput', $event)"
                              @focus="$emit('resetError', $event)"
                            />
                          </div>
                          <p class="error login">{{ errorMsg.password }}</p>
                          <div class="text-start mt-4 ms-0 mb-3">
                            <div class="mb-1">
                              <p class="mt-4 mb-4 warning">
                                <span
                                  ><i
                                    class="si si-exclamation"
                                    style="
                                      font-size: 16px;
                                      color: red;
                                      font-weight: bold;
                                      margin: 4px;
                                    "
                                  ></i
                                ></span>
                                불법적인 접근 또는 허가되지 않은 사용자가 접속을
                                시도할 경우 관계 법령에 의해 처벌을 받을 수
                                있습니다.
                              </p>
                            </div>
                          </div>
                          <button
                            class="btn btn-primary btn-block"
                            @click.prevent="$emit('submit')"
                          >
                            로그인
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    loginInfo: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
      }),
    },
    errorMsg: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
      }),
    },
  },
}
</script>

<style></style>
