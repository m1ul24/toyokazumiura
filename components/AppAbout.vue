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
            2016年9月、IT系企業に就職。システム開発や、サーバーの管理などを担当する。
            2018年3月、株式会社タイミーにジョイン。Webシステムの開発やAPIの開発を担当する。のちに取締役に就任。
            2018年9月に独立し、フリーランスとして活動をはじめる。
            2019年4月、株式会社Robesを創業。CTOに就任。
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
