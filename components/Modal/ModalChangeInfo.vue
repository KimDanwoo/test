<template>
  <transition name="modal" v-if="open">
    <div class="modal-mask">
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>{{ title }} 변경</h3>
          </div>
          <div class="modal-body">
            <div class="table-responsive">
              <table
                class="table text-nowrap text-md-nowrap table-bordered mg-b-0"
              >
                <colgroup>
                  <col width="5%" />
                  <col width="45%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>검색어</th>
                    <th>
                      <div class="row" style="margin-left: 2px">
                        <select
                          name="user[month]"
                          class="form-control form-select select2"
                          data-bs-placeholder="Select Month"
                        >
                          <option value="1">주소</option>
                          <option value="2">이름</option>
                        </select>
                        <input class="form-control" type="text" />
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <th>지역</th>
                    <td>
                      <select
                        name="user[month]"
                        class="form-control form-select select2"
                        data-bs-placeholder="Select Month"
                      >
                        <option value="1">지역</option>
                        <option value="2">이름</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>기간검색</th>
                    <td class="date-td">
                      <div class="row">
                        <select
                          name="user[month]"
                          class="form-control form-select select2"
                          data-bs-placeholder="Select Month"
                        >
                          <option value="1">가입일</option>
                        </select>
                        <input
                          class="form-control"
                          placeholder="Input box"
                          type="date"
                        />
                        <input
                          class="form-control"
                          placeholder="Input box"
                          type="date"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <ButtonBox cancelTit="검색" submitTit="초기화" />
            <br />
            <br />
            <table
              class="table text-nowrap text-md-nowrap table-bordered mg-b-0"
            >
              <colgroup>
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>건물코드</th>
                  <th>건물명</th>
                  <th>주소</th>
                  <th>건물유형</th>
                  <th>설정</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>123412</td>
                  <td>효원빌징</td>
                  <td>서울특별시 관악구 신림동</td>
                  <td>다중시설</td>
                  <td><button class="btn btn-primary">선택</button></td>
                </tr>
              </tbody>
            </table>
            <br />
            <PaginationBox />
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
import ButtonBox from '../common/ButtonBox.vue'
import PaginationBox from '../common/PaginationBox.vue'

export default {
  name: 'ModalChangeInfo',
  components: { ButtonBox, PaginationBox },
  props: {
    open: Boolean,
    title: String,
  },
}
</script>

<style scoped>
/* modal */
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
  width: 700px;
  height: 500px;
}

.modal-container {
  width: 700px;
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
  width: 180px;
  margin: 0 12px 0 0;
}

.date-td .row {
  margin-left: 2px;
}

.date-td select.form-control,
.date-td input.form-control {
  width: 140px;
  margin: 0 12px 0 0;
}

button {
  width: 60px;
  border-radius: 5px;
  padding: 6px 12px;
}
</style>
