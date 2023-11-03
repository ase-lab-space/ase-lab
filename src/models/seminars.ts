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
    name: '宇宙建築学ゼミ',
    description:
      '現状の宇宙建築から将来の宇宙建築計画まで幅広く調査し学習します。場所や建築様式、宇宙環境、宇宙用材料などいくつかのテーマに分け、希望のテーマを1人or複数人が担当して調査→発表という形で進めます。',
    status: 'wanted',
    url: '/img/seminars/space-architecture.webp',
    span: '2週に週1回',
    style: 'zoom',
  },
  {
    name: '航空宇宙機の飛行力学',
    description:
      '古典力学を駆使する業界では必須の知識で、就活の面接で「姿勢系について、難しいと思いますがどこで学んだんですか？」と聞かれました。知らなきゃ無理だろ思う分野だと思うので、面接で「ASE-Lab.で勉強しました」と言ってくれる人が出るのを目指そうと思っています。実際のプロジェクトの話とかをしながら、楽しくすすめていきます!',
    status: 'in-progress',
    url: 'https://www.morikita.co.jp/storage/images/cvr/069122cvr.jpg',
    span: '週1回',
    style: 'zoom',
  },
  {
    name: '組み込みOSゼミ',
    description:
      'みなさん、CanSatやCubeSatに搭載するマイコンの上でOS動かしたくなる時、ありますよね？そんなあなたに、このゼミをお勧めします！ぜひ一緒にマイコン上で動くOSを作って行きましょー！「ラスパイPico」という比較的安価なマイコンでものづくりができるので、未経験者～有識者まで大歓迎です！',
    status: 'wanted',
    url: 'https://interface.cqpub.co.jp/wp-content/uploads/MIF2020307-1088x1536.jpg',
    span: '週1回',
    style: 'zoom',
  },
  {
    name: 'Linuxゼミ',
    description:
      '団体代表，阿部舞哉です！う見えて自分がゼミを企画するのはASE-Lab.を立ち上げた軌道力学ゼミ以来です．結構この団体では学部1，2年生が中心となるような学部レベルのゼミが多いですが，ぜひこのゼミは学部後半～修士の方にも参加して満足してもらえればと思います！（もちろん高校生・学部1/2年生大歓迎です 多分ついて来れる）',
    status: 'finished',
    url: 'https://image.gihyo.co.jp/assets/images/gdp/2022/978-4-297-13149-4.jpg',
    span: '1日2章：６日間連続',
    style: 'zoom',
  },
  {
    name: '宇宙ビジネスゼミ',
    description:
      '宇宙業界の魅力に感興を覚えた就活生やその他に向けたソリューション的なもの（webサイト、図鑑）になれば良いなと思っています。',
    status: 'wanted',
    url: 'https://m.media-amazon.com/images/I/41FMzu-YkEL._SX302_BO1,204,203,200_.jpg',
    span: '週１回',
    style: 'zoom',
  },
  {
    name: '宇宙工学入門ゼミ',
    description:
      '今回のゼミの狙いは、「宇宙工学の基礎知識を身につけること」です。宇宙分野に興味がある人で、何から学べばいいのか迷っている人、学部１、２年生で基礎知識を身につけたい人など、ぜひご参加ください。',
    status: 'in-progress',
    url: 'https://www.morikita.co.jp/storage/images/cvr/069071cvr.jpg',
    span: '週１回',
    style: 'zoom',
  },
  {
    name: '電子工作入門ゼミ',
    description:
      '電子工作は缶サット，人工衛星，ロケットの電装(たぶん)，ロボット(たぶん)などなどに必須の知識です．この機会に手を動かしながら学んでみませんか？？',
    status: 'in-progress',
    url: 'https://m.media-amazon.com/images/I/81rS30jtYuL._SX522_.jpg',
    span: '週１回',
    style: 'zoom',
  },
  {
    name: '惑星科学ゼミ',
    description:
      '大阪大学大学院で宇宙惑星科学を専攻しているのでみなさんにこの分野の面白さを伝えると同時に一緒にワークショップなどを通して惑星から考える宇宙について考えたいと思っています！',
    status: 'in-progress',
    url: 'https://m.media-amazon.com/images/I/41bWNtSZsYL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    span: '2週に1回',
    style: 'zoom',
  },
  {
    name: '宇宙論',
    description:
      '宇宙論ゼミでは宇宙を記述する数式を知ることで、宇宙とは何なのかどのような存在なのかを学ぶことができます。インフレーションやビッグバンなどの宇宙初期からダークマターやダークエネルギーなど現在の宇宙、更に将来の宇宙までを理論的に解き明かしていきます！現在の宇宙論は一般相対性理論が基本となっていますが今回は入門書を扱うので、一般相対性理論を理解していなくても、学部1年生からでも参加可能です！',
    status: 'in-progress',
    url: 'https://m.media-amazon.com/images/I/51Th42pBs4L._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    span: '週1回',
    style: 'zoom',
  },
  {
    name: 'ロケット工学入門ゼミ',
    description:
      'ロケットの原理を知ることを目的としています。ロケットのサークルに入っているけどロケットの仕組みがいまいちわかっていない方々！これを期に一緒に勉強しませんか？？',
    status: 'in-progress',
    url: 'https://m.media-amazon.com/images/I/51MnhZoNYfL._SX342_BO1,204,203,200_.jpg',
    span: '2週に1回',
    style: 'zoom',
  },
  {
    name: '天文統計学ゼミ',
    description:
      '大学では習わない、天文データの処理に使われる統計を学んで自分で統計モデルを選択し、それが正しいのか評価できるようになることを目標にしています。将来天文学に関わりたい方におすすめです！',
    status: 'finished',
    url: 'https://m.media-amazon.com/images/I/51hFfxT7hqL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    span: '0.5-1回/週',
    style: 'zoom',
  },
  {
    name: 'ビジネス実務法務検定試験2級',
    description:
      '別団体の仕事上の都合で、宇宙ビジネスについて詳しくならないといけないので、勉強の一環としてビジネス実務法務の資格を取ることにしました :火:この資格は3級スタートですが、僕は3級も何も持ってない初心者です！1人でやるとだらけちゃうので、もし興味ある人がいれば一緒に勉強してみたいです …！',
    status: 'finished',
    url: 'https://m.media-amazon.com/images/I/51Oc2TrMX-L._SX350_BO1,204,203,200_.jpg',
    span: '週1〜0.5回程度',
    style: 'zoom',
  },
  {
    name: '小型衛星(UNISON連携)',
    description:
      'あの話題の本です。ゲットしたので、どうせ読むなら輪読したらいいかなーと思ってます。',
    status: 'finished',
    url: 'https://m.media-amazon.com/images/I/51ktoOozR-L._SX353_BO1,204,203,200_.jpg',
    span: '4月1日以降開始予定',
    style: 'zoom',
  },
  {
    name: '哲学ゼミ',
    description:
      '毎回いくつか議題を持ち寄り、90分程度を目安にディスカッションをしたいと思っています。哲学的なことについて話したい！以外に何も決まっていないので、参加者で参加しやすい形式を模索していきたいと思っています！ぜひお気軽にご参加ください！',
    status: 'finished',
    url: 'https://www.toyo.ac.jp/link-toyo/images/topics/7384/7384_1.jpg',
    span: '3月末～4月上旬から',
    style: 'zoom',
  },
  {
    name: '統計力学ゼミ(院試対策)',
    description:
      '院試対策やりましょう！院試で使うけど学部で履修してない（開講してない）という方、履修したけど復習したい方など誰でも大歓迎！！（もちろん教えてくれる方も！）僕も大学で履修していない科目なので、1から一緒に頑張りましょう！',
    status: 'in-progress',
    url: 'https://m.media-amazon.com/images/I/41bFrwVMbJL._SX340_BO1,204,203,200_.jpg',
    span: '4月上旬',
    style: 'zoom',
  },
  {
    name: '宇宙農業ゼミ',
    description:
      '「宇宙×農業」と言っても、そのアプローチ方法は様々あるかと思います。私自身全くの素人なので、同じような分野に興味のある皆さんと一緒に、業界への理解を深めつつ、将来的には何らかのプロジェクト創りにつなげていきたいなと思います！最初の1カ月は週1で情報交換や調査をし、今後の講演や活動について協議できればなと思います。科目の特性上あらゆる領域の知見が必要となるので、多くの方のご参加をお待ちしております！',
    status: 'in-progress',
    url: 'https://innoplex.org/wp-content/uploads/2019/06/space-indoorfarming000353.jpg',
    span: '4月上～中旬',
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
    status: 'finished',
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
    status: 'finished',
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
