<template>
  <LoadingBox v-if="isLoading" />
  <div class="inner-body" v-else>
    <PageTableHeader
      title="관리자 목록"
      subTitle="admin"
      currentTitle="list"
      :active="2"
    />
    <div class="row row-sm">
      <div class="col-lg-12">
        <ManagerSearchTable />

        <ManagerBtnBox />

        <ManagerListBox
          :managerList="managerList"
          @goDetail="moveToAdminDetail"
        />

        <PaginationBox />
      </div>
    </div>
  </div>
</template>

<script>
import ManagerSearchTable from '@/components/ManagerPage/ManagerSearchTable.vue'
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import ManagerBtnBox from '@/components/ManagerPage/ManagerBtnBox.vue'
import ManagerListBox from '@/components/ManagerPage/ManagerListBox.vue'
import PaginationBox from '@/components/common/PaginationBox.vue'
import LoadingBox from '@/components/common/LoadingBox.vue'
import apiManager from '@/services/apiManager'

export default {
  name: 'AdminPage',
  components: {
    ManagerSearchTable,
    PageTableHeader,
    ManagerBtnBox,
    ManagerListBox,
    PaginationBox,
    LoadingBox,
  },
  data() {
    return {
      managerList: [],
      isLoading: true,
    }
  },
  async fetch() {
    this.isLoading = true
    try {
      const {
        data: {
          data: { managerList },
        },
      } = await apiManager.getManagerList()
      this.managerList = managerList
    } catch (err) {
      console.log(err)
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    moveToAdminDetail(id) {
      this.$router.push(`/admin/detail/${id}`)
    },
  },
}
</script>
