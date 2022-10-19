<template>
  <transition name="modal" v-if="open">
    <div class="modal-mask">
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>입주자 정보 수정</h3>
          </div>
          <div class="modal-body">
            <div class="table-responsive">
              <table
                class="table text-nowrap text-md-nowrap table-bordered mg-b-0"
              >
                <colgroup>
                  <col width="5%" />
                  <col width="45%" />
                  <col width="5%" />
                  <col width="45%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>검색어</th>
                    <td>
                      <div class="row" style="margin-left: 2px">
                        <input
                          class="form-control"
                          placeholder="호남 타워"
                          type="text"
                        />
                        <button class="btn btn-primary">변경</button>
                      </div>
                    </td>
                    <th>등록일</th>
                    <td>2020-01-01</td>
                  </tr>
                  <tr>
                    <th>지역</th>
                    <td>
                      <div class="row" style="margin-left: 2px">
                        <input
                          class="form-control"
                          placeholder="호남 타워"
                          type="text"
                        />
                        <button class="btn btn-primary">변경</button>
                      </div>
                    </td>
                    <th>마지막 접속일</th>
                    <td>2020-01-01</td>
                  </tr>
                  <tr>
                    <th>가입유무</th>
                    <td colspan="3">미가입자</td>
                  </tr>
                  <tr>
                    <th>이름</th>
                    <td>홍길동</td>
                    <th>휴대폰번호</th>
                    <td>
                      <div class="row" style="margin-left: 2px">
                        <input
                          class="form-control"
                          placeholder="호남 타워"
                          type="text"
                        />
                        <button class="btn btn-primary">변경</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <div name="footer">
              <button class="brn btn-primary submit" @click="$emit('close')">
                정보수정
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    open: Boolean,
  },
}
</script>

<style scoped>
.background_close {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9997;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.2s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  z-index: 9998;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;
}

.modal-container {
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  padding: 20px 20px 5px 20px;
}

.modal-body input {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  background: #f8b62c;
  padding: 8px 24px;
  color: white;
  border-radius: 15px;
}

.modal-enter-active {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

select {
  width: 140px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 0 12px;
}

.form-group {
  margin: 8px 0 0 0;
}

select.form-control,
input.form-control {
  width: 120px;
  margin: 0 12px 0 0;
}

button {
  width: 60px;
  border-radius: 5px;
  padding: 6px 12px;
}

button.submit {
  width: 100px;
  border-radius: 5px;
  padding: 6px 12px;
}
</style>
