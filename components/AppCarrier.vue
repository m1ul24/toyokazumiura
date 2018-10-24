<template>
  <section class="AppCarrier">
    <div class="-head">
      <h2 class="-headline">CARRIER</h2>
      <p class="-subhead">経歴</p>
    </div>
    <div class="AppCarrier__Timeline">
      <ul class="Timeline">
        <li class="Timeline__item">
          <p class="Timeline__date">2015年12月</p>
          <div class="Timeline__content">
            <h3 class="Timeline__headline">独学でプログラミングを学びはじめる</h3>
            <p class="Timeline__body">
              プログラミングに興味を持ち、書籍やWebサイトを参考に学ぶ。
            </p>
          </div>
        </li>
        <li class="Timeline__item">
          <p class="Timeline__date">2016年9月</p>
          <div class="Timeline__content">
            <h3 class="Timeline__headline">IT企業に入社</h3>
            <p class="Timeline__body">
              いくつか内定をいただいた中から、一番幅広い経験ができそうな企業にエンジニアとして入社。
              この予想が見事的中し、インフラ、ネットワーク、デザイン、開発と幅広く経験する。
            </p>
          </div>
        </li>
        <li class="Timeline__item">
          <p class="Timeline__date">2018年3月</p>
          <div class="Timeline__content">
            <h3 class="Timeline__headline">タイミーにジョイン</h3>
            <p class="Timeline__body">
              <a href="https://taimee.co.jp" target="_blank" class="Description__link">タイミー</a>
              というスタートアップにジョイン。
              創業メンバーとして、Webシステムの開発やAPIの開発、インフラなどを担当。
              肩書きはCIO。
            </p>
          </div>
        </li>
        <li class="Timeline__item">
          <p class="Timeline__date">2018年9月</p>
          <div class="Timeline__content">
            <h3 class="Timeline__headline">独立</h3>
            <p class="Timeline__body">
              フリーランスとして活動開始。受託開発と個人開発を平行して行う。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.AppCarrier {
}

.Timeline {
  list-style: none;

  .Timeline__headline {
    font-size: 1.2em;
  }
  .Timeline__item {
    overflow: hidden;
    margin: 0;
    display: flex;
  }
  .Timeline__date {
    width: 110px;
    border-right: 3px #e5e5d1 solid;
  }
  .Timeline__content {
    width: calc(100% - 110px);
    padding-left: 30px;
    margin-bottom: 90px;
    position: relative;
  }
  .Timeline__content:before {
    content: '';
    width: 12px;
    height: 12px;
    background: #6fc173;
    position: absolute;
    left: -8px;
    top: 5px;
    border-radius: 50%;
  }
  .Timeline__body {
    color: #9DA0A4;
  }
}

</style>
