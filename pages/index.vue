<template>
  <div class="Index">
    <div class="particles-container">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="16"
        linesColor="#dedede"
        :linesWidth="8"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
    <header class="Index__header">
      <div class="Header__headline">
        <h1 class="Header__name">TOYOKAZU MIURA</h1>
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
      font-size: 1.8em;
      font-family: 'Museo Sans 500';
      margin: 15px;
      letter-spacing: .3em;
      color: $black;
    }
  }
}
.particles-container {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
#particles-js {
  height: 100vh;
}
.Index__body {
  width: 85%;
  max-width: $desktop;
  margin: 0 auto;
  margin-top: 40px;
}
.ShowMore {
  width: 85%;
  max-width: $desktop;
  margin: 30px auto 100px auto;
  text-align: center;
}
</style>
