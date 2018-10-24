<template>
  <div class="AppSkills">
    <div class="-head">
      <h2 class="-headline">SKILLS</h2>
      <p class="-subhead">スキル</p>
    </div>
    <AppChartBar :data="barChartData" :options="{ maintainAspectRatio: false }" />
    <div class="PieChart">
      <AppChartPie :data="pieCharData" />
    </div>
    <p class="Skills__description">
      バックエンドにはRails、フロントエンドにはNuxtを使うことが多いです。
      比較的簡単な構成のシステムの場合にはバックエンドにFirebaseを使うこともあります。
      デプロイ先にはAWS、Heroku、Netlifyなどを選択します。
      AWSはEC2、RDS、S3、CloudFront、ELB、Route53、Lambdaなどの経験があります。
    </p>
  </div>
</template>

<script>
import AppChartBar from '@/components/chart/AppChartBar'
import AppChartPie from '@/components/chart/AppChartPie'

export default {
  components: {
    AppChartBar,
    AppChartPie
  },
  data () {
    return {
      barChartData: {
        labels: [
          'Ruby',
          'Ruby on Rails',
          'JavaScript',
          'Vue.js',
          'Nuxt.js',
          'HTML',
          'CSS',
          'Linux',
          'AWS'
        ],
        datasets: [
          {
            label: 'スキル',
            backgroundColor: '#f87979',
            data: [
              80,
              75,
              65,
              60,
              60,
              85,
              75,
              95,
              60,
              30
            ]
          }
        ]
      },
      pieCharData: {
        labels: [
          'フロントエンド',
          'バックエンド',
          'インフラ'
        ],
        datasets: [
          {
            backgroundColor: [
              '#279AF1',
              '#1EA896',
              '#EA526F',
            ],
            data: [
              45,
              35,
              20
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/base/variables.scss";

.Skills__description {
  margin-top: 60px;
}
.PieChart {
  margin-top: 60px;
  @include desktop {
    width: 50%;
  }
}
</style>
