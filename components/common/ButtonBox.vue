<template>
  <div class="button-box">
    <button class="btn btn-warning" @click="$emit('cancel')">
      {{ cancelTit }}
    </button>
    <button class="btn btn-primary">{{ submitTit }}</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonBox',
  props: {
    cancelTit: String,
    submitTit: String,
  },
}
</script>

<style>
.button-box {
  display: flex;
  justify-content: center;
  align-content: center;
}

.button-box button {
  margin: 0 12px;
}
</style>
