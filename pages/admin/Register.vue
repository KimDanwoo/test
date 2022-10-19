<template>
  <div class="inner-body">
    <PageTableHeader
      title="관리자 계정 생성"
      subTitle="admin"
      currentTitle="list"
      detailTitle="register"
      :active="3"
    />

    <div class="row row-sm">
      <div class="col-lg-12">
        <ManagerRegisterTable
          :newAdminInfo="newAdminInfo"
          :errorMsg="errorMsg"
          @changeInfo="onChangeAdminInfo"
          @changeCheckbox="onClickAdminPermition"
          @accountCheck="onCheckOverlapAccount"
        />

        <ButtonBox
          cancelTit="취소"
          submitTit="계정생성"
          @cancel="moveToAdminList"
          submit=""
        />
      </div>
    </div>

    <ModalDesc
      :open="modalDescInfo.open"
      :title="modalDescInfo.title"
      :desc="modalDescInfo.desc"
      @close="onCloseModalDesc"
    />
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import ManagerRegisterTable from '@/components/ManagerPage/ManagerRegisterTable.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
import ModalDesc from '@/components/Modal/ModalDesc.vue'

export default {
  name: 'Register',
  components: {
    PageTableHeader,
    ManagerRegisterTable,
    ButtonBox,
    ModalDesc,
  },
  data() {
    return {
      newAdminInfo: {
        account: '',
        password: '',
        name: '',
        permition: {
          user: false,
          fire_company: false,
          building: false,
          content: false,
          inquiry: false,
        },
        phone: '',
        belong: '',
      },
      modalDescInfo: {
        open: false,
        title: '',
        desc: '',
      },
      errorMsg: {
        account: '',
        password: '',
        name: '',
        phone: '',
        belong: '',
      },
    }
  },
  methods: {
    // Router
    moveToAdminList() {
      this.$router.push('/admin')
    },

    // Modal
    onOpenModalDesc(tit, msg) {
      this.modalDescInfo = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseModalDesc() {
      this.modalDescInfo.open = false
    },

    // Event Listner
    onChangeAdminInfo({ target: { name, value } }) {
      this.newAdminInfo[name] = value
    },
    onClickAdminPermition({ target: { name, checked } }) {
      if (checked) {
        this.newAdminInfo.permition[name] = true
      } else {
        this.newAdminInfo.permition[name] = false
      }
    },
    onCheckOverlapAccount() {
      const regExp = /^[a-z]+[a-z0-9]{5,19}$/g

      if (
        !regExp.test(this.newAdminInfo.account) ||
        this.newAdminInfo.account.length < 6
      ) {
        this.onOpenModalDesc(
          '실패',
          '아이디는 영문 소문자와 숫자로\n6글자 이상 구성되어야 합니다.'
        )
      } else if (this.newAdminInfo.account === 'korsafe') {
        this.onOpenModalDesc(
          '중복',
          '중복되는 관리자 아이디가 존재합니다. 관리자 아이디를 다시 입력해주세요'
        )
      } else {
        this.onOpenModalDesc('등록 가능', '등록 가능한 아이디입니다.')
      }
    },
  },
}
</script>

<style scoped></style>
