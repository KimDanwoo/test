<template>
  <transition name="modal" v-if="open">
    <div class="modal-mask">
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>회원탈퇴 사유</h3>
          </div>
          <div class="modal-body">
            <p>
              유저이름 : <b>{{ name }}</b>
            </p>
            <p>
              회원구분 : <b>{{ type }}</b>
            </p>
            <select
              class="form-control form-select"
              name="secession"
              id="secession"
            >
              <option value="1">아이디 변경 및 재가입 목적</option>
              <option value="2">서비스 이용 불필요</option>
              <option value="3">기타</option>
            </select>
            <input
              class="form-control"
              type="text"
              placeholder="직접입력"
              :disabled="true"
            />
          </div>
          <div class="modal-footer">
            <div name="footer">
              <button class="brn btn-primary" @click="$emit('close')">
                입력
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
    name: String,
    type: String,
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
  width: 400px;
  height: 300px;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: red;
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

button {
  width: 60px;
  border-radius: 5px;
  padding: 6px 12px;
}
</style>
