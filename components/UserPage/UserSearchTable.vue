<template>
  <div class="card custom-card">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table text-nowrap text-md-nowrap table-bordered mg-b-0">
          <colgroup>
            <col width="10%" />
            <col width="50%" />
            <col width="10%" />
            <col width="50%" />
          </colgroup>
          <thead>
            <tr>
              <th>검색어</th>
              <th colspan="3">
                <div class="row">
                  <div class="col-2">
                    <div class="form-group m-0">
                      <div class="row">
                        <div class="col-6">
                          <select
                            name="user[month]"
                            class="form-control form-select select2 search-select"
                            data-bs-placeholder="Select Month"
                          >
                            <option value="1">아이디</option>
                            <option value="2">이름</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 p-0">
                    <input
                      class="form-control"
                      placeholder="검색어 입력"
                      type="text"
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>회원 구분</th>
              <td>
                <div class="form-group">
                  <div class="custom-controls-stacked search-label-wrap">
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="user"
                      />
                      <span class="custom-control-label">가입자</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="user"
                      />
                      <span class="custom-control-label">소방업체</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="fire_company"
                      />
                      <span class="custom-control-label"
                        >건물소방안전관리자</span
                      >
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="building"
                      />
                      <span class="custom-control-label">입주자</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="content"
                      />
                      <span class="custom-control-label">탈퇴자</span>
                    </label>
                  </div>
                </div>
              </td>
              <th>가입플랫폼</th>
              <td>
                <div class="form-group">
                  <div class="custom-controls-stacked search-label-wrap">
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="user"
                      />
                      <span class="custom-control-label">전체</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="user"
                      />
                      <span class="custom-control-label">안드로이드</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="fire_company"
                      />
                      <span class="custom-control-label">애플</span>
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>기간검색</th>
              <td colspan="3">
                <div class="row">
                  <div class="col-2">
                    <select
                      name="user[month]"
                      class="form-control form-select select2"
                      data-bs-placeholder="Select Month"
                    >
                      <option value="1">가입일</option>
                    </select>
                  </div>
                  <div class="col-2">
                    <input
                      class="form-control"
                      placeholder="Input box"
                      type="date"
                    />
                  </div>
                  <div class="col-2">
                    <input
                      class="form-control"
                      placeholder="Input box"
                      type="date"
                    />
                  </div>
                </div>
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
  name: 'userSearchTable',
}
</script>

<style></style>
