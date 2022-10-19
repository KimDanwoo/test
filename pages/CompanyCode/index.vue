<template>
  <LoadingBox v-if="isLoading" />
  <div class="inner-body" v-else>
    <PageTableHeader
      title="소방업체 코드 목록"
      subTitle="company-code"
      currentTitle="list"
      :active="2"
    />
    <div class="row row-sm">
      <div class="col-lg-12">
        <CodeSearch />

        <ButtonBox cancelTit="검색" submitTit="초기화" />

        <CompanyCodeList
          :companyList="companyList"
          @goDetail="moveToDetail"
          @openSecession="onOpenModalSecession"
        />

        <PaginationBox />
      </div>
    </div>

    <ModalCompanySecession
      :open="modalSecession.open"
      :name="modalSecession.name"
      :type="modalSecession.companyType"
      @close="onCloseModalSecession"
    />
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import CodeSearch from '@/components/CompanyCode/CodeSearch.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
import CompanyCodeList from '@/components/CompanyCode/CompanyCodeList.vue'
import PaginationBox from '@/components/common/PaginationBox.vue'
import ModalCompanySecession from '@/components/Modal/ModalCompanySecession.vue'
import LoadingBox from '@/components/common/LoadingBox.vue'
import apiCompany from '@/services/apiCompany'

export default {
  components: {
    PageTableHeader,
    CodeSearch,
    ButtonBox,
    CompanyCodeList,
    PaginationBox,
    ModalCompanySecession,
    LoadingBox,
  },
  data() {
    return {
      isLoading: false,
      companyList: [],
      modalSecession: {
        open: false,
        companyId: 0,
        name: '',
        companyType: '',
      },
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
      this.companyList = companyCodeList
    } catch (err) {
      console.log(err)
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    // Router Event
    moveToDetail(id) {
      this.$router.push(`/companycode/detail/${id}`)
    },

    // Modal Event
    onOpenModalSecession({ id, companyName }) {
      this.modalSecession = {
        open: true,
        companyId: id,
        name: companyName,
        companyType: '소방업체',
      }
    },
    onCloseModalSecession() {
      this.modalSecession.open = false
    },
  },
}
</script>

<style></style>
