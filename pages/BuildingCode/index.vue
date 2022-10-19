<template>
  <LoadingBox v-if="isLoading" />
  <div class="inner-body" v-else>
    <PageTableHeader
      title="건물코드 목록"
      subTitle="building-code"
      currentTitle="list"
      :active="2"
    />

    <div class="row row-sm">
      <div class="col-lg-12">
        <CodeSearch />

        <ButtonBox cancelTit="검색" submitTit="초기화" />

        <CodeList
          :buildingList="buildingList"
          @goDetail="moveToBuildingCodeDetail"
        />

        <PaginationBox />
      </div>
    </div>
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import CodeSearch from '@/components/BuildingCode/CodeSearch.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
import CodeList from '@/components/BuildingCode/CodeList.vue'
import PaginationBox from '@/components/common/PaginationBox.vue'
import apiBuilding from '@/services/apiBuilding'
import LoadingBox from '@/components/common/LoadingBox.vue'

export default {
  name: 'BuildingCode',
  components: {
    PageTableHeader,
    CodeSearch,
    ButtonBox,
    CodeList,
    PaginationBox,
    LoadingBox,
  },
  data() {
    return {
      isLoading: false,
      buildingList: [],
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
      this.buildingList = buildingCodeList
    } catch (err) {
      console.log(err)
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    // Router Event
    moveToBuildingCodeDetail(id) {
      this.$router.push(`/buildingcode/detail/${id}`)
    },
  },
}
</script>

<style></style>
