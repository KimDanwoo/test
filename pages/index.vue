<template>
  <div class="inner-body">
    <PageTableHeader
      title="대시보드"
      subTitle="main"
      currentTitle="Dashboard"
      :active="2"
    />
    <DashboardTable />
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import DashboardTable from '@/components/MainPage/DashboardTable.vue'

export default {
  name: 'IndexPage',
  components: { PageTableHeader, DashboardTable },
}
</script>
