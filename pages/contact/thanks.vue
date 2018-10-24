<template>
  <div class="Thanks">
    <div class="-head">
      <h2 class="-headline">THANKS!</h2>
    </div>
    <div class="Thanks__body">
      <p>
        お問い合わせありがとうございます。
        通常、3営業日以内にご返信いたします。
        万一、返信がない場合はお手数ですがSNS等からご連絡をお願いいたします。
      </p>
      <div class="Home__btn">
        <nuxt-link class="Home__btn__button -btn" to="/">
          トップページへ
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'THANKS',
      meta: [
        { property: 'og:title', content: 'THANKS' },
        { property: 'og:url', content: 'https://toyokazumiura.com' + this.$route.fullPath }
      ]
    }
  }  
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.Thanks {
  width: 85%;
  max-width: $desktop;
  margin: 0 auto 100px auto;
}
.Home__btn {
  margin-top: 90px;
  text-align: center;
}

</style>
