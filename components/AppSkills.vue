<template>
  <div class="AppSkills">
    <div class="-head">
      <h2 class="-headline">SKILLS</h2>
      <p class="-subhead">スキル</p>
    </div>
    <AppChartBar :data="barChartData" :options="{ maintainAspectRatio: false }" />
    <!--
    <div class="PieChart">
      <AppChartPie :data="pieCharData" />
    </div>
    <p class="Skills__description">
      バックエンドにはRails、フロントエンドにはNuxtを使うことが多いです。
      比較的簡単な構成のシステムの場合にはバックエンドにFirebaseを使うこともあります。
      デプロイ先にはAWS、Heroku、Netlifyなどを選択します。
      AWSはEC2、RDS、S3、CloudFront、ELB、Route53、Lambdaなどの経験があります。
    </p>
    -->
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
          'JavaScript',
          'TypeScript',
          'Vue.js',
          'React.js',
          'Ruby',
          'Python',
          'HTML',
          'CSS',
          'AWS',
          'Firebase',
          'Linux'
        ],
        datasets: [
          {
            label: 'スキル',
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            data: [
              85,
              80,
              95,
              40,
              85,
              45,
              90,
              90,
              65,
              80,
              85,
              0, // HACK: min
              100 // HACK: max
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
