<template>
  <div class="AppWorks">
    <div class="-head">
      <h2 class="-headline">WORKS</h2>
      <p class="-subhead">制作実績</p>
    </div>
    <div class="Work"
      v-for="(workedYear, index) in workYears"
      :key="index"
      v-if="!year || workedYear == year"
    >
      <h4 class="Work__year" v-if="!year">{{ workedYear }}</h4>
      <div class="Work__wrap">
        <article class="Work__item"
          v-for="(work, index) in works"
          :key="index"
          v-if="work.year === workedYear && index < limit"
        >
          <h3 class="Work__headline">{{ work.title }}</h3>
          <div class="Work__body">
            <img :src="work.image.src" :alt="work.image.alt" class="Work__image" v-if="work.image">
            <p class="Work__description" v-html="work.description"></p>
            <ul class="Architecture__list">
              <li class="List__item" v-for="(tag, index) in work.tags" :key="index">{{ tag }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: Number
    },
    limit: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      workYears: [
        '2019',
        '2018'
      ],
      works: [
        {
          title: 'Robes',
          image: {
            src: require('~/assets/images/robes.png'),
            alt: 'Robes',
          },
          description:
            `<a href="https://robes.co.jp" target="_blank" class="Description__link">Robes</a>
            は「毎日のコーデがまるごと届いて、そのまま着れる」をコンセプトにしたメンズの月額制ファッションサービスです。
            開発全般を担当しました。`,
          tags: ['Nuxt.js', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Firebase'],
          year: '2019'
        },
        {
          title: 'Taimee',
          image: {
            src: require('~/assets/images/taimee.png'),
            alt: 'Taimee',
          },
          description:
            `<a href="https://taimee.co.jp" target="_blank" class="Description__link">タイミー</a>
            の創業メンバーとして、企業様用のWebシステムやAPIの開発、インフラの構築を担当しました。`,
          tags: ['Ruby on Rails', 'Ruby', 'JavaScript', 'HTML', 'CSS', 'AWS', 'Heroku'],
          year: '2018'
        },
        {
          title: 'Ooogle',
          image: {
            src: require('~/assets/images/ooogle.png'),
            alt: 'Ooogle'
          },
          description:
            `奢りたい人と奢られたい人のマッチングプラットフォームを作りました。
            Railsでバックエンドの開発を担当しました。
            詳細は<a href="https://note.mu/kumagai3/n/n146fc83aba58" target="_blank" class="Description__link">こちら</a>。`,
          tags: ['Ruby on Rails', 'Ruby', 'Nuxt.js', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Heroku'],
          year: '2018'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.AppWorks {
}

.Work {
  .Work__year {
    font-size: 2em;
    color: #9DA0A4;
    text-align: center;
    margin-top: 60px;
  }
  .Work__wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @include desktop {
      flex-wrap: wrap;
      flex-direction: row;
    }
    .Work__headline {
      font-size: 1.3em;
      margin-bottom: 15px;
    }
    .Work__image {
      width: 100%;
    }
    .Work__item {
      margin: 30px 0;
      @include desktop {
        width: calc(100% / 2 - 30px);
      }
    }
    .Work__body {
      color: #9DA0A4;
    }
  }
}

.Architecture__list {
  margin-top: 15px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  .List__item {
    margin: .1em .5em .1em 0;
    border: 1px solid $text-light;
    border-radius: 3px;
    background-color: $white-ter;
    padding: .1em .2em;
  }
}

</style>
