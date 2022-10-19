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
                <p>{{ buildingInfo.createdAt }}</p>
              </td>
              <th>유효결제 만료일</th>
              <td>
                <p>{{ buildingInfo.paymentedAt }}</p>
              </td>
            </tr>
            <tr>
              <th>건물구분</th>
              <td>
                <p>{{ buildingTypeName(buildingInfo.buildingType) }}</p>
              </td>
              <th>건물코드</th>
              <td>
                <p>{{ buildingInfo.code }}</p>
              </td>
            </tr>
            <tr>
              <th>건물명/사업자명</th>
              <td>
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-180"
                    :placeholder="buildingInfo.name"
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
                    :placeholder="buildingInfo.buisnessNumber"
                    type="text"
                  />
                  <button class="btn btn-primary detail-button">변경</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>연결된 소방 업체</th>
              <td>
                <div class="row" style="margin-left: 2px">
                  <input
                    class="form-control w-180"
                    :placeholder="buildingInfo.companyName"
                    type="text"
                  />
                  <button class="btn btn-primary detail-button">변경</button>
                </div>
              </td>
              <th>주소</th>
              <td>
                <p>{{ buildingInfo.address }}</p>
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
  name: 'BuildingCodeDetailTable',
  props: {
    buildingInfo: {
      type: Object,
    },
  },
  methods: {
    buildingTypeName(type) {
      let name
      switch (type) {
        case 1:
          name = '특급'
          break
        case 2:
          name = '임시소방'
          break
        case 3:
          name = '3급'
          break
        case 4:
          name = '2급'
          break
        case 5:
          name = '1급'
          break
        default:
          break
      }
      return name
    },
  },
}
</script>
<style></style>
