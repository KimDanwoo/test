<template>
  <LoadingBox v-if="isLoading" />
  <div class="inner-body" v-else>
    <PageTableHeader
      title="건물 상세 정보"
      subTitle="building-code"
      currentTitle="list"
      detailTitle="detail"
      :active="3"
    />
    <div class="row row-sm">
      <div class="col-lg-12">
        <BuildingCodeDetailTable :buildingInfo="buildingInfo" /><br />
        <ManagerInfoList /><br />
        <CodeInfoChangeHistory /><br />
        <AdminMemoTable @openMemo="onOpenmodalMemo" /><br />
        <TanantInfo @openTanantInfo="onOpenModalTanantInfo" /><br />
        <PaginationBox />
        <InspectionStatus />
        <ButtonBox cancelTit="취소" submitTit="정보수정" @cancel="moveToList" />
        <br />
      </div>
    </div>

    <ModalManagerMemo :open="modalMemo" @close="onCloseModalMemo" />
    <ModalChangeTanantInfo
      :open="modalTanantInfo.open"
      @close="onCloseModalTanantInfo"
    />
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import BuildingCodeDetailTable from '@/components/BuildingCode/CodeDetailTable.vue'
import ManagerInfoList from '@/components/BuildingCode/ManagerInfoList.vue'
import CodeInfoChangeHistory from '@/components/BuildingCode/CodeInfoChangeHistory.vue'
import AdminMemoTable from '@/components/common/AdminMemoTable.vue'
import TanantInfo from '@/components/BuildingCode/TanantInfo.vue'
import InspectionStatus from '@/components/BuildingCode/InspectionStatus.vue'
import PaginationBox from '@/components/common/PaginationBox.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
import ModalManagerMemo from '@/components/Modal/ModalManagerMemo.vue'
import ModalChangeTanantInfo from '@/components/Modal/ModalChangeTanantInfo.vue'
import apiBuilding from '@/services/apiBuilding'
import LoadingBox from '@/components/common/LoadingBox.vue'

export default {
  name: 'BuildingCodeDetail',
  components: {
    PageTableHeader,
    BuildingCodeDetailTable,
    ManagerInfoList,
    CodeInfoChangeHistory,
    AdminMemoTable,
    TanantInfo,
    InspectionStatus,
    PaginationBox,
    ButtonBox,
    ModalManagerMemo,
    ModalChangeTanantInfo,
    LoadingBox,
  },
  data() {
    return {
      isLoading: false,
      buildingInfo: {},
      modalMemo: false,
      modalTanantInfo: {
        open: false,
      },
    }
  },
  async fetch() {
    this.isLoading = true
    try {
      const {
        data: {
          data: { buildingCodeList },
        },
      } = await apiBuilding.getBuildingList()
      this.buildingInfo = buildingCodeList[this.$route.params.id]
    } catch (err) {
      console.log(err)
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    // Router Event
    moveToList() {
      this.$router.push('/buildingcode')
    },

    // Modal Event
    onOpenmodalMemo() {
      this.modalMemo = true
    },
    onCloseModalMemo() {
      this.modalMemo = false
    },
    onOpenModalTanantInfo() {
      this.modalTanantInfo.open = true
    },
    onCloseModalTanantInfo() {
      this.modalTanantInfo.open = false
    },
  },
}
</script>

<style></style>
