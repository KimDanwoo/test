<template>
  <LoadingBox v-if="isLoading" />
  <div class="inner-body" v-else>
    <PageTableHeader
      title="관리자 계정 수정"
      subTitle="admin"
      currentTitle="list"
      detailTitle="detail"
      :active="3"
    />
    <div class="row row-sm">
      <div class="col-lg-12">
        <ManagerDetailTable
          @openActive="onOpenManagerActivity"
          :managerDetail="managerDetail"
        />
        <ButtonBox cancelTit="취소" submitTit="정보수정" @cancel="moveToList" />
        <ManagerActivityHistory v-if="isActivity" />
        <PaginationBox v-if="isActivity" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import ManagerDetailTable from '@/components/ManagerPage/ManagerDetailTable.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
import ManagerActivityHistory from '@/components/ManagerPage/ManagerActivityHistory.vue'
import PaginationBox from '@/components/common/PaginationBox.vue'
import LoadingBox from '@/components/common/LoadingBox.vue'
import apiManager from '@/services/apiManager'

export default {
  name: 'AdminDetail',
  components: {
    PageTableHeader,
    ManagerDetailTable,
    ButtonBox,
    ManagerActivityHistory,
    PaginationBox,
    LoadingBox,
  },
  data() {
    return {
      isActivity: false,
      isLoading: false,
      adminDetail: {
        id: 'admin',
        password: 'password1',
        name: '김길동',
        permition: ['회원관리', '소방업체', '콘텐츠관리'],
        phone: '010-1234-1234',
        company: '한국소방안전',
      },
      managerDetail: {},
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
      this.managerDetail = managerList[this.$route.params.id]
    } catch (err) {
      console.log(err)
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    // Rouet
    moveToList() {
      this.$router.push('/admin')
    },

    // 유저 활동 정보 보기
    onOpenManagerActivity() {
      this.isActivity = true
    },
  },
}
</script>

<style></style>
