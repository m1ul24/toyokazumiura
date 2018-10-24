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
          <p>
            1994年生まれ、宮城県出身。
            高校卒業後、プロミュージシャンを目指し音楽学校へ進学。
            アーティストのサポートや楽曲制作をするが途中で挫折。
            21歳からプログラミングを独学ではじめる。
            アーティストや企業のWebサイトを作るようになり、Web制作の楽しさを知る。
            2016年9月、IT系企業に就職。社内SEとしてシステム開発や、サーバーの管理などを担当する。
            2018年3月、株式会社タイミーにジョイン。創業メンバーとして主にWebシステムの開発を担当する。のちに取締役に就任。
            2018年9月に独立。フリーランスとして活動をはじめる。
            受託開発の傍ら、個人開発も行う。
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
  // &:before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: $white-ter;
  //   transform: skew(0, -5deg);
  //   z-index: -1;
  // }
  .Profile {
    @include desktop {
      display: flex;
      justify-content: center;
    }
  }

  .Profile__icon {
    text-align: center;
    margin: 5px 15px 0 0;
  }
}
</style>
