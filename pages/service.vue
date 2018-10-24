<template>
  <div class="Service">
    <div class="-head">
      <h2 class="-headline">SERVICE</h2>
      <p class="-subhead">サービス</p>
    </div>
    <div class="Service__body">
      <p>準備中です。</p>
    </div>
  </div>
</template>

<script>
import AppService from '@/components/AppService'

export default {
  components: {
    AppService
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.Service {
  width: 85%;
  max-width: $desktop;
  margin: 0 auto 100px auto;
  .Service__body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
