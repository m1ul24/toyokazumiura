<template>
  <div class="AppSocialLinks">
    <ul class="AppSocialLinks__nav">
      <li class="nav__item">
        <a href="https://www.facebook.com/toyokazu.miura.9" target="_blank" class="nav__link">
          <img src="~/assets/images/facebook-dark.svg" height="25px" alt="twitter-icon" class="nav__icon" v-if="color === 'dark'">
          <img src="~/assets/images/facebook.svg" height="25px" alt="twitter-icon" class="nav__icon" v-else>
        </a>
      </li>
      <li class="nav__item">
        <a href="https://twitter.com/m1ul24" target="_blank" class="nav__link">
          <img src="~/assets/images/twitter-dark.svg" height="25px" alt="twitter-icon" class="nav__icon" v-if="color === 'dark'">
          <img src="~/assets/images/twitter.svg" height="25px" alt="twitter-icon" class="nav__icon" v-else>
        </a>
      </li>
      <li class="nav__item">
        <a href="https://github.com/m1ul24" target="_blank" class="nav__link">
          <img src="~/assets/images/github-dark.svg" height="25px" alt="github-icon" class="nav__icon" v-if="color === 'dark'">
          <img src="~/assets/images/github.svg" height="25px" alt="github-icon" class="nav__icon" v-else>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String
    }
  }
}
</script>


<style lang="scss" scoped>
.AppSocialLinks {
  margin: 15px auto;
}
.AppSocialLinks__nav {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  width: 160px;
}
</style>
