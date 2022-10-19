<template>
  <div class="page main-signin-wrapper">
    <div class="row signpages text-center">
      <img
        src="@/assets/img/brand/full.png"
        class="header-brand-img"
        alt="logo"
      />

      <LoginForm
        :loginInfo="loginInfo"
        :errorMsg="errorMsg"
        @changeInput="onChangeLoginInfo"
        @submit="onSubmit"
        @resetError="onFocusErrorMessage"
      />
    </div>

    <ModalDesc
      :open="openModalDesc.open"
      @close="onCloseModalDesc"
      :title="openModalDesc.title"
      :desc="openModalDesc.desc"
    />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginPage/LoginForm.vue'
import ModalDesc from '@/components/Modal/ModalDesc.vue'

export default {
  name: 'LoginPage',
  components: { LoginForm, ModalDesc },
  data() {
    return {
      loginInfo: {
        id: 'korsafe',
        password: 'Korsafe1!',
      },
      errorMsg: {
        id: '',
        password: '',
      },
      openModalDesc: {
        open: false,
        title: '',
        desc: '',
        path: '',
      },
    }
  },
  methods: {
    // Modal Event
    onOpenModalDesc(tit, msg, goPath) {
      this.openModalDesc = {
        open: true,
        title: tit,
        desc: msg,
        path: goPath,
      }
    },

    onCloseModalDesc() {
      this.openModalDesc.open = false
      if (this.openModalDesc.path !== '') {
        this.$router.push(this.openModalDesc.path)
      }
    },

    // change handler
    onChangeLoginInfo({ target: { name, value } }) {
      const newValue = value.replace(/\s/g, '')
      this.loginInfo[name] = newValue
    },

    onFocusErrorMessage({ target: { name } }) {
      this.errorMsg[name] = ''
    },

    // 임시 로그인 처리
    postLoginInfo() {
      if (
        this.loginInfo.id === 'korsafe' &&
        this.loginInfo.password === 'Korsafe1!'
      ) {
        this.onOpenModalDesc(
          '로그인 성공',
          '로그인에 성공했습니다.\n메인 페이지로 이동합니다.',
          '/'
        )
      } else {
        this.onOpenModalDesc(
          '로그인 실패',
          '일치하는 아이디가 없습니다.\n아이디와 패스워드를 다시\n입력해주세요',
          ''
        )
      }
    },

    // 로그인
    onSubmit() {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
      if (this.loginInfo.id.length < 2) {
        this.errorMsg.id = '아이디를 2글자 이상 입력해주세요'
      } else this.errorMsg.id = ''

      if (!passwordRegex.test(this.loginInfo.password)) {
        this.errorMsg.password =
          '비밀번호에 영문,숫자,특수문자가 포함돼야합니다.'
      }

      if (this.loginInfo.password.length <= 6) {
        this.errorMsg.password = '비밀번호를 6글자 이상 입력해주세요'
      }

      if (
        this.loginInfo.id.length >= 2 &&
        passwordRegex.test(this.loginInfo.password) &&
        this.loginInfo.password.length > 6
      ) {
        this.postLoginInfo()
      }
    },
  },
}
</script>

<style scoped>
.header-brand-img {
  margin: 26px auto;
}

.signpages {
  width: 50%;
  max-width: 450px !important;
  min-width: 400px !important;
}
</style>
