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
              <th>소방업체코드</th>
              <td>
                <div class="row">
                  <p>{{ companyInfo.code }}</p>
                </div>
              </td>
              <th>가입일시</th>
              <td>
                <p>{{ companyInfo.createdAt }}</p>
              </td>
            </tr>
            <tr>
              <th>소방업체명</th>
              <td>
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-180"
                    :placeholder="companyInfo.companyName"
                    type="text"
                  />
                  <button class="btn btn-primary detail-button">변경</button>
                </div>
              </td>
              <th>대표연락처</th>
              <td>
                <p>{{ companyInfo.phone }}</p>
              </td>
            </tr>
            <tr>
              <th>사업자명</th>
              <td>
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-180"
                    :placeholder="companyInfo.buisnessmanName"
                    type="text"
                  />
                  <button class="btn btn-primary detail-button">변경</button>
                </div>
              </td>
              <th>사업자번호</th>
              <td>
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-180"
                    :placeholder="companyInfo.buisnessNumber"
                    type="text"
                  />
                  <button class="btn btn-primary detail-button">변경</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>사업장 주소</th>
              <td colspan="3">
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-80p"
                    :placeholder="companyInfo.address"
                    type="text"
                  />
                  <button class="btn btn-primary detail-button">변경</button>
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
  name: 'CompanyCodeDetail',
  props: {
    companyInfo: {
      type: Object,
    },
  },
}
</script>
<style></style>
