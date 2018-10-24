<template>
  <footer class="TheFooter">
    <AppSocialLinks color="dark" />
    <div class="TheFooter__copy-right">
      <small>&copy; Copyright 2018 TOYOKAZU MIURA</small>
    </div>
  </footer>
</template>

<script>
import AppSocialLinks from '@/components/AppSocialLinks'

export default {
  components: {
    AppSocialLinks
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.TheFooter {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: #525252;
  height: 160px;
  margin-top: auto;
  padding: 15px;
  background-color: $white-bis;
}

.TheFooter__copy-right {
  font-size: .8em;
}
</style>
