<template>
  <section class="AppService">
    <div class="-head">
      <h2 class="-headline">SERVICE</h2>
      <p class="-subhead">サービス</p>
    </div>
    <div class="Service">
      <div class="Service__wrap">
        <div class="Service__item">
          <h3 class="Service__headline">システム開発</h3>
          <p class="Service__body">
            DNS
            更新が必要なサイトは WordPress をご提案しています。デザインテンプレートとなるテーマファイルを一から設計し、メディアECやウェブマガジンにも対応可能です。す
          </p>
        </div>
        <div class="Service__item">
          <h3 class="Service__headline">Web制作</h3>
          <p class="Service__body">
            Webサイトを作成します。コーポレートサイトやランディングページの作成など柔軟に対応できます。
            サイトを公開するまでに必要な作業も承ります。
            サーバーの設定やDNS、SSL等。
          </p>
        </div>
        <div class="Service__item">
          <h3 class="Service__headline">サーバー構築</h3>
          <p class="Service__body">
            AWSの構成のご相談から構築まで
          </p>
        </div>
      </div>
    </div>
    <div class="Example">
      <h3>Case Study</h3>
      <p>こんなケースにも対応します</p>
      <ul>
        <li>AWSの構成の相談をしたい</li>
        <li>SSL、DNSなどの設定がわからない</li>
      </ul>
    </div>
    <div class="Notes">
      <h3 class="Notes__headline">ご注意点</h3>
      <ul class="Notes__list">
        <li class="Notes__item">基本的にリモートでの作業のみ承っております。オンラインの打ち合わせやチャットでのコミュニケーションは可能です。</li>
        <li class="Notes__item">写真やロゴなどの素材は原則お客様にご用意いただいております。</li>
        <li class="Notes__item">バナーやロゴの作成は行なっておりません。</li>
      </ul>
    </div>
    <div>
      <h2>エンジニアの定額レンタル</h2>
      <p>
        月額15,000円で、質問し放題のプランです。
        Slack等のチャットでメッセージのやりとりができます。
        あなたのビジネスをサポートします。
      </p>
      <p>
        ビジネスをするにあたってITは欠かせないものとなっています。
        しかし、専門的な知識がないと困ってしまうことも多いもの。

        かといってエンジニアを雇うのはお金がかかるし...
        「ちょっとだけ手伝ってほしい！」

        あなたの「ちょっと困った」を解決するプランです。

        ひとりで2時間悩んでいたことが専門家に聞いたら5分で解決したなんてことは多々あります。

        スタートアップの立ち上げや、社内SEをしていた経験を元に、あなたのビジネスのサポートを行います。
      </p>
      <ul>
        <li>エンジニアを雇うほどではないけど相談できる人がほしい</li>
        <li>ルーターの設定がわからない</li>
        <li>SSLの設定をしたい</li>
        <li>メールで独自ドメインを使いたい</li>
        <li>便利なツールを知りたい</li>
        <li>おすすめのレンタルサーバーを知りたい</li>
        <li>ドキュメントの共有にはなにがおすすめ？</li>
        <li>業務の効率化をしたい</li>
        <li>WordPressの導入のサポートをしてほしい</li>
      </ul>
    </div>
    <div>
      <h3>ご契約の流れ</h3>
      <ol>
        <li>お問い合わせ</li>
        <li>ご契約</li>
        <li>ご利用開始</li>
      </ol>
    </div>
    <div>
      <h2>よくある質問</h2>
      <ul>
        <li>開発は可能ですか？</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.AppService {
  width: 80%;
  margin: 0 auto 90px auto;
  padding-top: 30px;
}
.Service {
  .Service__wrap {
    display: flex;
    justify-content: space-around;
    .Service__headline {
      font-size: 1.5em;
      text-align: center;
    }
    .Service__item {
      margin: 15px;
      width: 33.33%;
    }
  }
}
.Notes {
  margin: 30px 15px 0 15px;
  .Notes__headline {
    display: inline-block;
    font-size: 1.2em;
    border-bottom: 2px solid #45494B;
    margin-bottom: 15px;
  }
  .Notes__list {
    list-style: square;
    padding-left: 20px;
    .Notes__item {
      padding: 5px 0;
    }
  }
}
</style>
