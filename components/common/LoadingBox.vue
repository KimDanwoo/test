<template>
  <div class="inner-body">
    <div class="text-center">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingBox',
}
</script>

<style>
.lds-ripple {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
