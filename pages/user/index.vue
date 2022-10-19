<template>
  <LoadingBox v-if="isLoading" />
  <div class="inner-body" v-else>
    <PageTableHeader
      title="회원 목록"
      subTitle="user"
      currentTitle="list"
      :active="2"
    />
    <div class="row row-sm">
      <div class="col-lg-12">
        <UserSearchTable />
        <ButtonBox cancelTit="검색" submitTit="초기화" />
        <UserListTable
          :userList="userList"
          @goDetail="moveToDetail"
          @setSecessionUser="onOpenModalSecession"
        />
        <PaginationBox />
      </div>
    </div>

    <ModalUserSecession
      :open="modalSecession.open"
      :name="modalSecession.user_name"
      :type="modalSecession.user_type"
      @close="onCloseModalSecession"
    />
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import UserListTable from '@/components/UserPage/UserListTable.vue'
import UserSearchTable from '@/components/UserPage/UserSearchTable.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
import PaginationBox from '@/components/common/PaginationBox.vue'
import ModalUserSecession from '@/components/Modal/ModalUserSecession.vue'
import apiUser from '@/services/apiUser'
import LoadingBox from '@/components/common/LoadingBox.vue'

export default {
  name: 'UserList',
  components: {
    PageTableHeader,
    UserListTable,
    UserSearchTable,
    ButtonBox,
    PaginationBox,
    ModalUserSecession,
    LoadingBox,
  },
  data() {
    return {
      isLoading: false,
      userList: [],
      modalSecession: {
        open: false,
        user_id: 3,
        user_name: '',
        user_type: '',
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
      this.userList = userList
    } catch (err) {
      console.log(err)
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    // Router Event
    moveToDetail(id) {
      this.$router.push(`/user/detail/${id}`)
    },

    // Modal Event
    onOpenModalSecession({ id, name, division }) {
      this.modalSecession = {
        open: true,
        user_id: id,
        user_name: name,
        user_type: division,
      }
    },

    onCloseModalSecession() {
      this.modalSecession = {
        open: false,
        user_id: '',
        user_name: '',
        user_type: '',
      }
    },
  },
}
</script>

<style></style>
