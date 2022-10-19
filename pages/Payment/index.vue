<template>
  <LoadingBox v-if="isLoading" />
  <div class="inner-body" v-else>
    <PageTableHeader
      title="결제 관리"
      subTitle="payment"
      currentTitle="list"
      :active="2"
    />
    <div class="row row-sm">
      <div class="col-lg-12">
        <PaymentSearchBox />

        <ButtonBox cancelTit="검색" submitTit="초기화" />

        <PaymentList :paymentList="paymentList" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTableHeader from '@/components/common/PageTableHeader.vue'
import PaymentSearchBox from '@/components/Payment/PaymentSearchBox.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
import PaymentList from '@/components/Payment/PaymentList.vue'
import apiPayment from '@/services/apiPayment'
import LoadingBox from '@/components/common/LoadingBox.vue'

export default {
  components: {
    PageTableHeader,
    PaymentSearchBox,
    ButtonBox,
    PaymentList,
    LoadingBox,
  },
  data() {
    return {
      isLoading: false,
      paymentList: [],
    }
  },
  async fetch() {
    this.isLoading = true
    try {
      const {
        data: {
          data: { paymentList },
        },
      } = await apiPayment.getPaymentList()
      this.paymentList = paymentList
    } catch (error) {
      // this.$nuxt.context.redirect({ path: '404' })
      console.log(error)
    } finally {
      this.isLoading = false
    }
  },
}
</script>

<style></style>
