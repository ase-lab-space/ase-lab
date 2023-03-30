import { $t } from 'src/boot/i18n';

export type StatusType =
  | 'wanted'
  | 'in-preparation'
  | 'in-progress'
  | 'finished';

export const STATUS: {
  [key in StatusType]: string;
} = {
  wanted: $t('seminars.labels.wanted'),
  'in-preparation': $t('seminars.labels.in-preparation'),
  'in-progress': $t('seminars.labels.in-progress'),
  finished: $t('seminars.labels.finished'),
} as const;

export type StyleType = 'zoom' | 'hybrid' | 'face-to-face';

export const STYLE: {
  [key in StyleType]: string;
} = {
  zoom: 'オンライン（Zoom）',
  hybrid: 'ハイブリッド',
  'face-to-face': '対面',
} as const;

export interface ISeminar {
  name: string;
  description?: string;
  status: keyof typeof STATUS;
  url: string;
  span: string;
  style: keyof typeof STYLE;
}

export const seminars: ISeminar[] = [
  {
    name: 'ビジネス実務法務検定試験2級',
    description:
    '別団体の仕事上の都合で、宇宙ビジネスについて詳しくならないといけないので、勉強の一環としてビジネス実務法務の資格を取ることにしました :火:この資格は3級スタートですが、僕は3級も何も持ってない初心者です！1人でやるとだらけちゃうので、もし興味ある人がいれば一緒に勉強してみたいです …！',
    status: 'wanted',
    url: 'https://m.media-amazon.com/images/I/51Oc2TrMX-L._SX350_BO1,204,203,200_.jpg',
    span: '週1〜0.5回程度',
    style:'zoom',
  },
  {
    name: '小型衛星(UNISON連携)',
    description:
      'あの話題の本です。ゲットしたので、どうせ読むなら輪読したらいいかなーと思ってます。',
    status: 'wanted',
    url: 'https://m.media-amazon.com/images/I/51ktoOozR-L._SX353_BO1,204,203,200_.jpg',
    span: '4月1日以降開始予定',
    style: 'zoom',
  },
  {
    name: '哲学ゼミ',
    description:
      '毎回いくつか議題を持ち寄り、90分程度を目安にディスカッションをしたいと思っています。哲学的なことについて話したい！以外に何も決まっていないので、参加者で参加しやすい形式を模索していきたいと思っています！ぜひお気軽にご参加ください！',
    status: 'wanted',
    url: 'https://www.toyo.ac.jp/link-toyo/images/topics/7384/7384_1.jpg',
    span: '3月末～4月上旬から',
    style: 'zoom',
  },
  {
    name: '統計力学ゼミ(院試対策)',
    description:
      '院試対策やりましょう！院試で使うけど学部で履修してない（開講してない）という方、履修したけど復習したい方など誰でも大歓迎！！（もちろん教えてくれる方も！）僕も大学で履修していない科目なので、1から一緒に頑張りましょう！',
    status: 'wanted',
    url: 'https://m.media-amazon.com/images/I/41bFrwVMbJL._SX340_BO1,204,203,200_.jpg',
    span: '4月上旬',
    style: 'zoom',
  },
  {
    name: '宇宙農業ゼミ',
    description:
      '「宇宙×農業」と言っても、そのアプローチ方法は様々あるかと思います。私自身全くの素人なので、同じような分野に興味のある皆さんと一緒に、業界への理解を深めつつ、将来的には何らかのプロジェクト創りにつなげていきたいなと思います！最初の1カ月は週1で情報交換や調査をし、今後の講演や活動について協議できればなと思います。科目の特性上あらゆる領域の知見が必要となるので、多くの方のご参加をお待ちしております！',
    status: 'wanted',
    url: 'https://innoplex.org/wp-content/uploads/2019/06/space-indoorfarming000353.jpg',
    span: '4月上～中旬',
    style: 'zoom',
  },
  {
    name: '宇宙法入門演習ゼミ',
    description:
      '宇宙法に触れ始めるきっかけを改めて作りたい＆アウトプットや議論の機会を通して宇宙法のおもしろさを知ってもらいたい、という動機で企画しました。第一回でインプットを行い、第二～三回でテキストの問題を材料に演習のようなものを実施する予定です。数回完結なのでぜひぜひ気軽に参加していただき、もっと宇宙法に触れたいと思っていただけたら現行の宇宙法ゼミにも参加していただけたら嬉しいです！！主に国際的な側面から触れる演習の予定なので、既に現行の宇宙法ゼミに入っている方にも一味違った切り口から宇宙法を楽しんでもらえるかなと思います。',
    status: 'wanted',
    url: 'https://m.media-amazon.com/images/I/51TJWxuz5AL._SX245_BO1,204,203,200_.jpg',
    span: '1月~',
    style: 'zoom',
  },
  {
    name: '宇宙飛行士を目指す会',
    description:
      '1人では続かない運動を、みんなでやることで継続させましょう！という会です。名前は仰々しいですが、健康な体を作りたい人、アスリート・宇宙飛行士を目指す人、どんなでもぜひいらしてください。',
    status: 'in-progress',
    url: '/img/seminars/astronaut-seminar.webp',
    span: '毎日（人数によって調整）',
    style: 'zoom',
  },
  {
    name: '天体物理学実習ゼミ',
    description:
      '冬期短期集中ゼミとして開催します！習った物理学を使った実践的に天文学を勉強したいという方におすすめです！ゼミの中では、みんなと話し合いながら問題を解いていく形式なので、物理学が少し苦手という方も、周りの方と協力して問題に挑んでもらえると楽しめると思います！よろしくお願いします！',
    status: 'finished',
    url: '/img/seminars/astronomy.webp',
    span: '12月~1月',
    style: 'zoom',
  },
  {
    name: $t('seminars.cansat.name'),
    description:
      '宇宙技術の教育を目的として始まったCanSat、この本では全ての系について基本を理解することができます！何でもできるようになりたい！というアツい方は特に飛び込んで見て欲しいです！',
    status: 'in-progress',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHemaPwNiQ7bEQu6z_VywbmiyExFgTl08Pg&usqp=CAU',
    span: $t('seminars.cansat.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.introduction-to-electromagnetism.name'),
    description:
      '電磁気学入門ということで、大学で電磁気学をまだ履修してない方でも参加できるような内容にしたいと考えています！',
    status: 'finished',
    url: 'https://pbs.twimg.com/media/FZyTs1iaAAAjgYV?format=jpg&name=large',
    span: $t('seminars.introduction-to-electromagnetism.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.electronic-circuit-design.name'),
    description:
      '電子回路とは、動かすためのプログラムと実際に動く構造系の架け橋になる重要な分野です。制作をされている方はもちろんそうでない方も大歓迎です！',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/71dO80D6gcL.jpg',
    span: $t('seminars.electronic-circuit-design.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.space-businesses.name'),
    description:
      '宇宙ビジネスに興味はあるが、自分で時間を作ってそれらを追うのは難しいという方も週に1度ゼミで時間をとって仲間とニュース記事を読みませんか？',
    status: 'in-progress',
    url: 'https://pbs.twimg.com/media/FZKGoZ0UcAE7HRh?format=jpg&name=large',
    span: $t('seminars.space-businesses.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.introduction-to-space-law.name'),
    description:
      '教材を中心に宇宙法の理解を深めます。また、今後自分たちで学習を進めるための足がかりとなるゼミ内容にしたいです。予備知識の有無は問いません！',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81QQOTHOiSL.jpg',
    span: $t('seminars.introduction-to-space-law.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.astronomy-certification.name'),
    description:
      '天文宇宙検定の対策をする予定です。星空宇宙天文検定(星検)も視野に入れています！事前知識は不要で、検定を受ける受けないも自由です。 天文系の検定、一緒にチャレンジしませんか？興味のある方はぜひ！',
    status: 'finished',
    url: '/img/seminars/tenmon-uchu-kentei.webp',
    span: $t('seminars.astronomy-certification.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.physics-of-the-universe.name'),
    description:
      'このゼミでは、地球に最も近い恒星、太陽から、ブラックホールや遠方の銀河まで、宇宙に浮かぶ様々な天体や現象について数式や物理を用いて学習していきます。天文学の基礎となる様々な法則や理論を自分たちの手で分析することで、天文学というものの理解を深めていきましょう。',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81XAjp79rRL.jpg',
    span: $t('seminars.physics-of-the-universe.span'),
    style: 'hybrid',
  },
  {
    name: $t('seminars.fluid-dynamics.name'),
    description:
      '宇宙工学に絡む流体力学に関して、めちゃめちゃ範囲が広いです。ぶっちゃけ、最初の基礎のとことか理解してなくてもCFDは扱えます。なので、基礎からやりたい人も、CFDのシミュレーションだけやりたい人でも参加できるようにします！ 前半は、基礎と圧縮性流体を扱い、後半はCFD使いながら解析していこうと思っていて、こちらはCAD講座と連携して、CADで作ったものを解析することにする予定です。',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/5178936V07L._SX353_BO1,204,203,200_.jpg',
    span: $t('seminars.fluid-dynamics.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.introduction-to-aerospace-engineering.name'),
    description:
      '使う教材が宇宙システムの初学者対象らしいので、内容は入門者向けになる気がします！（復習したい方もどうぞ！） 多分、間にテスト期間も挟むので、うまく調整しながら頑張りましょう！',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41F1M118NXL._SX337_BO1,204,203,200_.jpg',
    span: $t('seminars.introduction-to-aerospace-engineering.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.image-processing-2nd.name'),
    description:
      '皆さんお待ちかね、画像処理ゼミ2周目です。楽しく勉強しましょう。',
    status: 'in-preparation',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41FCF736uWL._SX352_BO1,204,203,200_.jpg',
    span: $t('seminars.image-processing-2nd.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.astronomy.name'),
    description:
      '隔週ずつのゼミとなります。2週間の2コマのうち、チャンネルでのアンケートで関心が深い方の内容をピックアップしてお届けします。内容によってはディスカッションや調査などを行い、積極的な学びの場を作っていきたいと思っています。 まだゼミに参加できていないという方も予習なしで気楽に参加できるゼミとなっています！どうぞご参加ください！ ',
    status: 'finished',
    url: '/img/seminars/astronomy.webp',
    span: $t('seminars.astronomy.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.satellite-data-analytics.name'),
    status: 'finished',
    url: 'https://www.tellusxdp.com/cmn/img/ogp.jpg',
    span: $t('seminars.satellite-data-analytics.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.introduction-to-aerospace-engineering-trial.name'),
    description: '宇宙工学入門ゼミから3回分を抜粋した体験版です！',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51rZrV0V8IL._SX357_BO1,204,203,200_.jpg',
    span: $t('seminars.introduction-to-aerospace-engineering-trial.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.orbital-dynamics.name'),
    description:
      '円錐曲線の運動から、軌道遷移、簡単なランベルト問題、スイングバイなどまでの基本的な運動を扱うことを一緒に頑張ってくれるメンバーを募集します！',
    status: 'finished',
    url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
    span: $t('seminars.orbital-dynamics.span'),
    style: 'hybrid',
  },
  {
    name: $t('seminars.image-processing.name'),
    description:
      '画像処理はあらゆる理工系分野において使われる技術であって、この本はその最初の基礎固めによく読まれる本です。楽しく勉強することができればいいなと思っています。',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41FCF736uWL._SX352_BO1,204,203,200_.jpg',
    span: $t('seminars.image-processing.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.physical-mathematics.name'),
    description:
      'もう履修済みの内容も直観的な理解がなければ、いつか忘れてしまいます。しかし、数式や法則を直観的に捉えることができれば、常識として認識できるため、体に染みつけることができます。早いうちに完全な理解と知識の構築を行い、次の学年に生かしていきましょう。',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51oYFb4Ri4L._SX321_BO1,204,203,200_.jpg',
    span: $t('seminars.physical-mathematics.span'),
    style: 'hybrid',
  },
  {
    name: $t('seminars.space-english.name'),
    description:
      "It may sometimes be specialized, but you can think of it as an opportunity to speak English! Everyone's welcome! I am looking forward to your participation!",
    status: 'finished',
    url: 'https://image.freepik.com/free-vector/colorful-galaxy-background-with-astronaut_52683-307.jpg',
    span: $t('seminars.space-english.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.introduction-to-aerospace-engineering.name'),
    description:
      '初学者向けの教材を使い、宇宙空間からロケット・衛星について幅広く学んでいきます！幅広い分野の入門的内容を扱っていく予定です。',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51rZrV0V8IL._SX357_BO1,204,203,200_.jpg',
    span: $t('seminars.introduction-to-aerospace-engineering.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.cad-starting-from-scratch.name'),
    description:
      '前半は簡単な操作の説明や製作など、後半はロケットエンジンなど自分が興味あるものを作製、オプションでCFD(数値流体力学)を用いた解析をします。ゼロから始めるので好きなタイミングで参加していただいて大丈夫です！',
    status: 'finished',
    url: '/img/seminars/zerocad.webp',
    span: $t('seminars.cad-starting-from-scratch.span'),
    style: 'zoom',
  },
  {
    name: $t('seminars.orbital-dynamics-2nd.name'),
    description:
      '皆さんお待ちかね、軌道力学2周目がいよいよ始まります。まず写真の本を買ってみましょう。とにかく面白いです。書いてある内容は複雑で面白いのに、使っている数学のハードルが低いので、とても理解しやすい！この良書を使って、授業・ディスカッション・質問タイムなどを通して基礎の基礎から軌道力学を学んでいきます。軌道力学は私も初心者なので恐れることなかれ。ゆくゆくは、皆さん、軌道計算マスターになることでしょう。',
    status: 'finished',
    url: '/img/seminars/kidorikigaku2.webp',
    span: $t('seminars.orbital-dynamics-2nd.span'),
    style: 'zoom',
  },
];
