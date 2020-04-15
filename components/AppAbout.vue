<template>
  <section class="AppAbout">
    <div class="-head">
      <h2 class="-headline">ABOUT</h2>
      <p class="-subhead">わたしのこと</p>
    </div>
    <div class="AppAbout_profile">
      <div class="Profile">
        <div class="Profile__icon">
          <img src="~/assets/images/profile.jpg" alt="profile image" width="150px">
          <AppSocialLinks />
        </div>
        <div class="Profile__body">
          <h2 class="Profile__name">三浦 豊和</h2>
          <p>
            1994年生まれ、宮城県出身。
            21歳からプログラミングを独学ではじめる。
            IT系ベンチャー企業でシステム開発やインフラの構築を経験。その後、株式会社タイミーのCIOや株式会社RobesのCTOを務める。
            現在はフリーランスとして活動中。
          </p>
        </div>
      </div>
    </div>
  </section>
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

.AppAbout {
  position: relative;
  .Profile {
    @include desktop {
      display: flex;
      justify-content: center;
    }
  }
  .Profile__name {
    font-weight: bold;
  }

  .Profile__icon {
    text-align: center;
    margin: 5px 15px 0 0;
  }
}
</style>
