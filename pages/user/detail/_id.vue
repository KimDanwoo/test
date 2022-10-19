<template>
  <LoadingBox v-if="isLoading" />
  <div class="inner-body" v-else>
    <PageTableHeader
      title="회원상세정보"
      subTitle="user"
      currentTitle="list"
      detailTitle="detail"
      :active="3"
    />

    <div class="row row-sm">
      <div class="col-lg-12">
        <UserDetailTable
          :userInfo="userInfo"
          @openBuildingCode="onOpenModalChangeBuildingCode"
        /><br />

        <UserDetailBuildingRegisterRecordTable /><br />

        <UserInfoChangeRecordTable /><br />

        <AdminMemoTable @openMemo="onOpenModalDesc" /><br />

        <UserSecessionTable />

        <ButtonBox cancelTit="취소" submitTit="정보수정" @cancel="moveToBack" />
      </div>
    </div>

    <ModalManagerMemo :open="openModalMemo" @close="onCloseModalMemo" />

    <ModalChangeInfo
      :open="openModalChangeBuildingCode.open"
      :title="openModalChangeBuildingCode.title"
      @close="onCloseModalChangeBuildingCode"
    />
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import UserDetailTable from '@/components/UserPage/UserDetailTable.vue'
import UserDetailBuildingRegisterRecordTable from '@/components/UserPage/UserDetailBuildingRegisterRecordTable.vue'
import UserInfoChangeRecordTable from '@/components/UserPage/UserInfoChangeRecordTable.vue'
import AdminMemoTable from '@/components/common/AdminMemoTable.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
import ModalManagerMemo from '@/components/Modal/ModalManagerMemo.vue'
import UserSecessionTable from '@/components/UserPage/UserSecessionTable.vue'
import ModalChangeInfo from '@/components/Modal/ModalChangeInfo.vue'
import LoadingBox from '@/components/common/LoadingBox.vue'
import apiUser from '@/services/apiUser'

export default {
  components: {
    PageTableHeader,
    UserDetailTable,
    UserDetailBuildingRegisterRecordTable,
    UserInfoChangeRecordTable,
    AdminMemoTable,
    ButtonBox,
    ModalManagerMemo,
    UserSecessionTable,
    ModalChangeInfo,
    LoadingBox,
  },
  data() {
    return {
      isLoading: false,
      userInfo: {},
      openModalMemo: false,
      openModalChangeBuildingCode: {
        open: false,
        title: '',
      },
    }
  },
  async fetch() {
    this.isLoading = true
    try {
      const {
        data: {
          data: { userList },
        },
      } = await apiUser.getUserList()
      this.userInfo = userList[this.$route.params.id]
    } catch (err) {
      console.log(err)
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    // Router Event
    moveToBack() {
      this.$router.push('/user')
    },

    // Modal Event
    onOpenModalDesc() {
      this.openModalMemo = true
    },

    onCloseModalMemo() {
      this.openModalMemo = false
    },

    onOpenModalChangeBuildingCode(codeName) {
      this.openModalChangeBuildingCode = {
        open: true,
        title: codeName,
      }
    },

    onCloseModalChangeBuildingCode() {
      this.openModalChangeBuildingCode = false
    },
  },
}
</script>

<style></style>
