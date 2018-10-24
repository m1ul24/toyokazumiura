<template>
  <nav class="TheMenu">
    <div class="HamburgerMenu" :class="{ active: isMenuOpen }" @click="menuToggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="-fade">
      <div class="Menu" v-if="isMenuOpen">
        <div class="Menu__wrap">
          <h3 class="Menu__headline">MENU</h3>
          <ul class="GlobalMenu">
            <li class="GlobalMenu__item">
              <a class="GlobalMenu__link" @click="routerPush('/')">
                <span class="GlobalMenu--en">HOME</span>
                <span class="GlobalMenu--line"></span>
                <span class="GlobalMenu--ja">ホーム</span>
              </a>
            </li>
            <li class="GlobalMenu__item">
              <a class="GlobalMenu__link" @click="routerPush('/about')">
                <span class="GlobalMenu--en">ABOUT</span>
                <span class="GlobalMenu--line"></span>
                <span class="GlobalMenu--ja">わたしのこと</span>
              </a>
            </li>
            <li class="GlobalMenu__item">
              <a class="GlobalMenu__link" @click="routerPush('/works')">
                <span class="GlobalMenu--en">WORKS</span>
                <span class="GlobalMenu--line"></span>
                <span class="GlobalMenu--ja">制作実績</span>
              </a>
            </li>
            <li class="GlobalMenu__item">
              <a class="GlobalMenu__link" @click="routerPush('/blog')">
                <span class="GlobalMenu--en">BLOG</span>
                <span class="GlobalMenu--line"></span>
                <span class="GlobalMenu--ja">ブログ</span>
              </a>
            </li>
            <li class="GlobalMenu__item">
              <a class="GlobalMenu__link" @click="routerPush('/contact')">
                <span class="GlobalMenu--en">CONTACT</span>
                <span class="GlobalMenu--line"></span>
                <span class="GlobalMenu--ja">お問い合わせ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  props: {
    isMenuOpen: {
      type: Boolean
    }
  },
  methods: {
    menuToggle() {
      this.$emit('menuToggle')
    },
    async routerPush(to) {
      await this.$router.push(to)
      this.$emit('menuClose')
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.TheMenu {
  text-align: center;
  .HamburgerMenu {
    position: fixed;
    z-index: 1000;
    top: 30px;
    right: 30px;
    width: 24px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span {
      display: inline-block;
      transition: all .4s;
      width: 100%;
      height: 2px;
      background-color: $text;
      border-radius: 4px;
    }
    &.active span:nth-of-type(1) {
      -webkit-transform: translateY(8px) rotate(-315deg);
      transform: translateY(8px) rotate(-315deg);
    }
    &.active span:nth-of-type(2) {
      opacity: 0;
    }
    &.active span:nth-of-type(3) {
      -webkit-transform: translateY(-8px) rotate(315deg);
      transform: translateY(-8px) rotate(315deg);
    }
  }

  .Menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .Menu__wrap {
      width: 85%;
      max-width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .Menu__headline {
      font-size: 2em;
      font-family: 'Museo Sans 500';
      color: $black;
      margin-bottom: 30px;
      position: relative;
      letter-spacing: .3em;
    }

    .GlobalMenu {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
      list-style: none;
      text-align: center;
      .GlobalMenu__item {
        transition: .3s;
      }
      .GlobalMenu--line {
        height: 1px;
        background-color: $border;
        display: inline-block;
        margin: 0 15px;
        flex-grow: 1;
      }
      .GlobalMenu--ja {
        font-size: .8em;
        letter-spacing: .2em;
      }
      .GlobalMenu--en {
        letter-spacing: .2em;
      }
      .GlobalMenu__link {
        width: 100%;
        margin: .5em 0;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        text-shadow: 0 1px 1px rgba(0,0,0,.1);
        color: $text;
        font-size: 1.2em;
        position: relative;
        transition: .3s;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
        // &:hover {
        //   &:after {
        //     display: block;
        //     content: '';
        //     position: absolute;
        //     left: -1.5em;
        //     width: 9px;
        //     height: 9px;
        //     border-right: 3px solid $text;
        //     border-bottom: 3px solid $text;
        //     -webkit-transform: rotate(-45deg);
        //     transform: rotate(-45deg);
        //   }
        // }
      }
    }
  }
}


</style>
