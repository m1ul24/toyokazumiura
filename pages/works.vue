<template>
  <div class="Works">
    <AppWorks />
    <p>※こちらの実績は担当したものの中の一部です</p>
    <div class="Contact__link">
      <nuxt-link class="Contact__button -btn" to="/contact">
        お問い合わせはこちら
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppWorks from '@/components/AppWorks'

export default {
  components: {
    AppWorks
  },
  head () {
    return {
      title: 'WORKS',
      meta: [
        { property: 'og:title', content: 'WORKS' },
        { property: 'og:url', content: 'https://toyokazumiura.com' + this.$route.fullPath }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.Works {
  width: 85%;
  max-width: $desktop;
  margin: 0 auto;
  margin-bottom: 60px;
  .Works__note {
    color: $text-light;
    margin-top: 60px;
  }
  .Contact__link {
    margin-top: 60px;
    text-align: center;
  }
}
</style>
