<template>
  <div class="row row-sm">
    <div class="col-sm-6 col-lg-6 col-xl-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table dash text-nowrap text-md-nowrap table-bordered mg-b-0"
            >
              <colgroup>
                <col width="10%" />
                <col width="45%" />
                <col width="45%" />
              </colgroup>
              <thead>
                <tr>
                  <th>총회원수</th>
                  <th colspan="2">123,234</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" rowspan="4">회원유형</th>
                  <td>가입자</td>
                  <td>$450,870</td>
                </tr>
                <tr>
                  <td>소방업체 관리자</td>
                  <td>$230,540</td>
                </tr>
                <tr>
                  <td>건물소방안전관리자</td>
                  <td>$55,300</td>
                </tr>
                <tr>
                  <td>입주민</td>
                  <td>$234,100</td>
                </tr>
                <tr>
                  <th scope="row">소방업체 수</th>
                  <td colspan="2">$43,198</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-lg-6 col-xl-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table dash text-nowrap text-md-nowrap table-bordered mg-b-0"
            >
              <colgroup>
                <col width="5%" />
                <col width="22%" />
                <col width="24%" />
                <col width="5%" />
                <col width="22%" />
                <col width="23%" />
              </colgroup>
              <thead>
                <tr>
                  <th>등록건물수</th>
                  <th colspan="2">123,123</th>
                  <th>총 매출액</th>
                  <th colspan="2">123,123원</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" rowspan="5">건물 유형</th>
                  <td>단독주택</td>
                  <td>123,123</td>
                  <td rowspan="5">매출 유형</td>
                  <td>임시소방</td>
                  <td>123,123개</td>
                </tr>
                <tr>
                  <td>임시소방</td>
                  <td>230,540</td>
                  <td>임시소방</td>
                  <td>230,540</td>
                </tr>
                <tr>
                  <td>3급소방</td>
                  <td>230,540</td>
                  <td>3급소방</td>
                  <td>55,300</td>
                </tr>
                <tr>
                  <td>2급소방</td>
                  <td>230,540</td>
                  <td>2급소방</td>
                  <td>234,100</td>
                </tr>
                <tr>
                  <td>1급소방</td>
                  <td>230,540</td>
                  <td>1급소방</td>
                  <td>43,198</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardTable',
}
</script>

<style>
.table.dash > :not(caption) > * > * {
  font-size: 13px;
}
</style>
