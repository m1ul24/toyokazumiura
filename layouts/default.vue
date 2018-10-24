<template>
  <div class="Layout">
    <TheMenu
      :isMenuOpen="isMenuOpen"
      @menuToggle="isMenuOpen = !isMenuOpen"
      @menuClose="isMenuOpen = false"
    />
    <div class="container">
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheMenu from '@/components/TheMenu';
import TheFooter from '@/components/TheFooter';

export default {
  scrollToTop: true,
  components: {
    TheMenu,
    TheFooter
  },
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.Layout {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  margin: 60px auto;
}

</style>
