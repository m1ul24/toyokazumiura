<template>
  <div class="About">
    <AppAbout />
    <AppCarrier />
    <AppSkills />
  </div>
</template>

<script>
import AppAbout from '@/components/AppAbout'
import AppCarrier from '@/components/AppCarrier'
import AppSkills from '@/components/AppSkills'

export default {
  components: {
    AppAbout,
    AppCarrier,
    AppSkills
  },
  head () {
    return {
      title: 'ABOUT',
      meta: [
        { property: 'og:title', content: 'ABOUT' },
        { property: 'og:url', content: 'https://toyokazumiura.com' + this.$route.fullPath }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.About {
  width: 85%;
  max-width: $desktop;
  margin: 0 auto;
}
.AppAbout {
  margin-bottom: 90px;
}
.AppCarrier {
  margin-bottom: 90px;
}
.AppSkills {
  margin-bottom: 90px;
}
</style>
