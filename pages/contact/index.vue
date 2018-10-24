<template>
  <div class="Contact">
    <div class="-head">
      <h2 class="-headline">CONTACT</h2>
      <p class="-subhead">お問い合わせ</p>
    </div>
    <form name="contact" action="/contact/thanks" class="Contact__form" netlify-honeypot="bot-field" data-netlify="true" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p class="Contact__message">
        ご興味を持っていただきまして、ありがとうございます。
        通常、3営業日以内にご返信いたします。
        お仕事のご依頼やご相談など、お気軽にどうぞ。
      </p>
      <div class="Form__group">
        <label class="-label">お名前</label>   
        <input type="text" name="name" class="-input" required />
      </div>
      <div class="Form__group">
        <label class="-label">メールアドレス</label>   
        <input type="email" name="email" class="-input" required />
      </div>
      <div class="Form__group">
        <label class="-label">メッセージ</label>
        <textarea name="message" class="-textarea" rows="10" required ></textarea>
      </div>
      <div class="Form__btn">
        <button type="submit" class="-btn Btn__submit">送信</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'CONTACT',
      meta: [
        { property: 'og:title', content: 'CONTACT' },
        { property: 'og:url', content: 'https://toyokazumiura.com' + this.$route.fullPath }
      ]
    }
  }  
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.Contact {
  width: 85%;
  max-width: $desktop;
  margin: 0 auto 100px auto;
  .Contact__message {
    margin-bottom: 60px;
  }
  .Contact__form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .Form__group {
      display: flex;
      justify-content: space-between;
      @include mobile {
        flex-direction: column;
      }
    }
    .Form__btn {
      margin-top: 30px;
      display: flex;
      &:before {
        content: '';
        width: 20%;
        @include mobile {
          width: 0;
        }
      }
      .Btn__submit {
        padding: 1em 2.5em;
      }
    }
  }
}

.-input {
  border:0; 
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size:1.1em; 
  color:$text; 
  margin:0 0 20px; 
  width: 80%;
  @include mobile {
    width: 100%;
  }
}

.-textarea {
  border:0; 
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size:1.1em; 
  color:$text; 
  margin:0 0 20px; 
  width: 80%;
  @include mobile {
    width: 100%;
  }
}

</style>
