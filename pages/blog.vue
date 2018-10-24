<template>
  <div class="Blog">
    <div class="-head">
      <h2 class="-headline">BLOG</h2>
      <p class="-subhead">ブログ</p>
    </div>
    <div class="Blog__body">
      <div class="Blog__item">
        <img src="~/assets/images/note.png" alt="note logo" height="60px">
        <h4 class="Blog__caption">
          noteは
          <a href="https://note.mu/m1ul24" target="_blank" class="Blog__link">こちら</a>
        </h4>
      </div>
      <div class="Blog__item">
        <img src="~/assets/images/qiita.png" alt="note logo" height="60px">
        <h4 class="Blog__caption">
          Qiitaは
          <a href="https://qiita.com/m1ul24" target="_blank" class="Blog__link">こちら</a>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'BLOG',
      meta: [
        { property: 'og:title', content: 'BLOG' },
        { property: 'og:url', content: 'https://toyokazumiura.com' + this.$route.fullPath }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.Blog {
  width: 85%;
  max-width: $desktop;
  margin: 0 auto;
  .Blog__body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @include desktop {
      flex-direction: row;
    }
    .Blog__item {
      margin: 30px;
      .Blog__caption {
        text-align: center;
      }
    }
  }
  .Blog__link {
    text-decoration: none;
    color: $text;
    border-bottom: 1px solid $text;
  }
}
</style>
