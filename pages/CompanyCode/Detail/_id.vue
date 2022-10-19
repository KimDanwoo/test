<template>
  <LoadingBox v-if="isLoading" />
  <div class="inner-body" v-else>
    <PageTableHeader
      title="소방업체 상세 정보"
      subTitle="company-code"
      currentTitle="list"
      detailTitle="detail"
      :active="3"
    />

    <div class="row row-sm">
      <div class="col-lg-12">
        <CompanyCodeDetail :companyInfo="companyInfo" /><br />

        <CompanyManagerList /><br />

        <InfoChangeHistory />

        <PaginationBox />

        <ManagementBuildingInfo />

        <PaginationBox />

        <ButtonBox cancelTit="취소" submitTit="정보수정" @cancel="moveToList" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import CompanyCodeDetail from '@/components/CompanyCode/CompanyCodeDetail.vue'
import CompanyManagerList from '@/components/CompanyCode/CompanyManagerList.vue'
import InfoChangeHistory from '@/components/CompanyCode/InfoChangeHistory.vue'
import ManagementBuildingInfo from '@/components/CompanyCode/ManagementBuildingInfo.vue'
import PaginationBox from '@/components/common/PaginationBox.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
import apiCompany from '@/services/apiCompany'
import LoadingBox from '@/components/common/LoadingBox.vue'

export default {
  name: 'BuildingCodeDetail',
  components: {
    PageTableHeader,
    CompanyCodeDetail,
    CompanyManagerList,
    InfoChangeHistory,
    ManagementBuildingInfo,
    PaginationBox,
    ButtonBox,
    LoadingBox,
  },
  data() {
    return {
      isLoading: false,
      companyInfo: {},
    }
  },
  async fetch() {
    this.isLoading = true
    try {
      const {
        data: {
          data: { companyCodeList },
        },
      } = await apiCompany.getCompanyList()
      this.companyInfo = companyCodeList[this.$route.params.id]
    } catch (err) {
      console.log(err)
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    // Router
    moveToList() {
      this.$router.push('/companycode')
    },
  },
}
</script>

<style></style>
