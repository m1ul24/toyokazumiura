<template>
  <div class="Index">
    <header class="Index__header">
      <div class="Header__headline">
        <h1 class="Header__name">TOYOKAZU MIURA</h1>
        <p class="Header__subtitle -subhead">Web Developer</p>
      </div>
    </header>

    <div class="Index__body">
      <AppWorks :year="2019" :limit="4" />
      <div class="ShowMore">
        <nuxt-link class="ShowMore__button -btn" to="/works">
          Show More
        </nuxt-link>
      </div>
      <AppAbout />
      <div class="ShowMore">
        <nuxt-link class="ShowMore__button -btn" to="/about">
          Show More
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppAbout from '@/components/AppAbout'
import AppWorks from '@/components/AppWorks'

export default {
  components: {
    AppAbout,
    AppWorks
  },
  head() {
    return {
      title: 'TOYOKAZU MIURA',
      titleTemplate: '',
      meta: [
        { property: 'og:title', content: 'TOP' },
        { property: 'og:url', content: 'https://toyokazumiura.com' + this.$route.fullPath }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.Index__header {
  height: 100vh;
  position: relative;
  margin-top: -60px;
  .Header__headline {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: -1;
    .Header__name {
      font-size: 1.5em;
      margin: 15px;
      letter-spacing: .3em;
      color: $black;
    }
  }
}
.Index__body {
  width: 85%;
  max-width: $desktop;
  margin: 0 auto;
}
.ShowMore {
  width: 85%;
  max-width: $desktop;
  margin: 30px auto 100px auto;
  text-align: center;
}
</style>
