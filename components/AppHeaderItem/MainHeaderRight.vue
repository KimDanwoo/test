<template>
  <div class="main-header-right">
    <button
      class="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent-4"
      aria-controls="navbarSupportedContent-4"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="si si-options-vertical"></i>
    </button>
    <div class="navbar navbar-expand-lg navbar-collapse responsive-navbar">
      <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
        <div class="d-flex order-lg-2 ms-auto">
          <!-- country flag -->
          <div class="dropdown d-flex main-header-notification">
            <a class="nav-link icon" href="javascript:;">
              <i class="si si-bell" style="font-size: 28px"></i>
              <span class="badge bg-info nav-link-badge">2</span>
            </a>
            <div class="dropdown-menu">
              <div class="header-navheading">
                <div class="d-flex">
                  <p class="main-notification-text mx-0 my-auto">
                    한국소방안전 새로운 소식
                  </p>
                </div>
              </div>
              <div class="main-notification-list">
                <div class="media new">
                  <div class="media-body">
                    <NuxtLink to="/payment">
                      <p>결제 내역을 확인해주세요</p>
                      <span>2022-10-01</span>
                    </NuxtLink>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <NuxtLink to="/admin">
                      <p>새로운 관리자를 확인해주세요</p>
                      <span>2022-10-01</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="dropdown-footer">
                <NuxtLink to="/">View All Notifications</NuxtLink>
              </div>
            </div>
          </div>
          <!-- notifications -->
          <!-- message -->
          <div class="dropdown d-flex main-profile-menu">
            <a class="d-flex" href="javascript:;">
              <span class="main-img-user">
                <img alt="avatar" src="@/assets/img/users/6.jpg" />
              </span>
            </a>
            <div class="dropdown-menu">
              <div class="header-navheading">
                <h6 class="main-notification-title">슈퍼관리자</h6>
                <p class="main-notification-text">koreasafe-admin</p>
              </div>
              <p class="dropdown-item border-top" @click="$emit('logout')">
                <i class="fe fe-user"></i> 로그아웃
              </p>
            </div>
          </div>
          <!-- profile -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeaderRight',
}
</script>

<style scoped>
p {
  margin: 0;
  cursor: pointer;
}

.dropdown-menu {
  padding: 0;
}
</style>
