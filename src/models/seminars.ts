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
    //宇宙論
    name: $t('seminars.seminer38.name'),
    description: $t('seminers.seminer38.discription'),
    status: 'wanted',
    url: 'https://m.media-amazon.com/images/I/51Th42pBs4L._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    span: $t('seminers.seminar38.span'),
    style: 'zoom',
  },
  {
    //制御MATLABゼミ
    name: $t('seminars.seminer37.name'),
    description: $t('seminers.seminer37.discription'),
    status: 'wanted',
    url: 'https://www.tdupress.jp//images/book/349377.jpg',
    span: $t('seminers.seminar37.span'),
    style: 'zoom',
  },
  {
    //宇宙建築学ゼミ
    name: $t('seminars.seminer36.name'),
    description: $t('seminers.seminer36.discription'),
    status: 'wanted',
    url: '/img/seminars/space-architecture.webp',
    span: $t('seminers.seminar36.span'),
    style: 'zoom',
  },
  {
    //航空宇宙機の飛行力学
    name: $t('seminars.seminer35.name'),
    description: $t('seminers.seminer35.discription'),
    status: 'in-progress',
    url: 'https://www.morikita.co.jp/storage/images/cvr/069122cvr.jpg',
    span: $t('seminers.seminar35.span'),
    style: 'zoom',
  },
  {
    //組み込みOSゼミ
    name: $t('seminars.seminer34.name'),
    description: $t('seminers.seminer34.discription'),
    status: 'in-progress',
    url: 'https://interface.cqpub.co.jp/wp-content/uploads/MIF2020307-1088x1536.jpg',
    span: $t('seminers.seminar34.span'),
    style: 'zoom',
  },
  {
    //Linuxゼミ
    name: $t('seminars.seminer33.name'),
    description: $t('seminers.seminer33.discription'),
    status: 'finished',
    url: 'https://image.gihyo.co.jp/assets/images/gdp/2022/978-4-297-13149-4.jpg',
    span: $t('seminers.seminar33.span'),
    style: 'zoom',
  },
  {
    //宇宙ビジネスゼミ
    name: $t('seminars.seminer32.name'),
    description: $t('seminers.seminer32.discription'),
    status: 'in-progress',
    url: 'https://m.media-amazon.com/images/I/41FMzu-YkEL._SX302_BO1,204,203,200_.jpg',
    span: $t('seminers.seminar32.span'),
    style: 'zoom',
  },
  {
    //宇宙工学入門ゼミ
    name: $t('seminars.seminer31.name'),
    description: $t('seminers.seminer31.discription'),
    status: 'in-progress',
    url: 'https://www.morikita.co.jp/storage/images/cvr/069071cvr.jpg',
    span: $t('seminers.seminar31.span'),
    style: 'zoom',
  },
  {
    //電子工作入門ゼミ
    name: $t('seminars.seminer30.name'),
    description: $t('seminers.seminer30.discription'),
    status: 'in-progress',
    url: 'https://m.media-amazon.com/images/I/81rS30jtYuL._SX522_.jpg',
    span: $t('seminers.seminar30.span'),
    style: 'zoom',
  },
  {
    //惑星科学ゼミ
    name: $t('seminars.seminer29.name'),
    description: $t('seminers.seminer29.discription'),
    status: 'finished',
    url: 'https://m.media-amazon.com/images/I/41bWNtSZsYL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    span: $t('seminers.seminar29.span'),
    style: 'zoom',
  },
  {
    //ロケット工学入門ゼミ
    name: $t('seminars.seminer28.name'),
    description: $t('seminers.seminer28.discription'),
    status: 'finished',
    url: 'https://m.media-amazon.com/images/I/51MnhZoNYfL._SX342_BO1,204,203,200_.jpg',
    span: $t('seminers.seminar28.span'),
    style: 'zoom',
  },
  {
    //天文統計学ゼミ
    name: $t('seminars.seminer27.name'),
    description: $t('seminers.seminer27.discription'),
    status: 'finished',
    url: 'https://m.media-amazon.com/images/I/51hFfxT7hqL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    span: $t('seminers.seminar27.span'),
    style: 'zoom',
  },
  {
    //ビジネス実務法務検定試験2級
    name: $t('seminars.seminer26.name'),
    description: $t('seminers.seminer26.discription'),
    status: 'finished',
    url: 'https://m.media-amazon.com/images/I/51Oc2TrMX-L._SX350_BO1,204,203,200_.jpg',
    span: $t('seminers.seminar26.span'),
    style: 'zoom',
  },
  {
    //小型衛星(UNISON連携)
    name: $t('seminars.seminer25.name'),
    description: $t('seminers.seminer25.discription'),
    status: 'finished',
    url: 'https://m.media-amazon.com/images/I/51ktoOozR-L._SX353_BO1,204,203,200_.jpg',
    span: $t('seminers.seminar25.span'),
    style: 'zoom',
  },
  {
    //哲学ゼミ
    name: $t('seminars.seminer24.name'),
    description: $t('seminers.seminer24.discription'),
    status: 'finished',
    url: 'https://www.toyo.ac.jp/link-toyo/images/topics/7384/7384_1.jpg',
    span: $t('seminers.seminar24.span'),
    style: 'zoom',
  },
  {
    //統計力学ゼミ(院試対策)
    name: $t('seminars.seminer23.name'),
    description: $t('seminers.seminer23.discription'),
    status: 'finished',
    url: 'https://m.media-amazon.com/images/I/41bFrwVMbJL._SX340_BO1,204,203,200_.jpg',
    span: $t('seminers.seminar23.span'),
    style: 'zoom',
  },
  {
    //宇宙農業ゼミ
    name: $t('seminars.seminer22.name'),
    description: $t('seminers.seminer22.discription'),
    status: 'finished',
    url: 'https://innoplex.org/wp-content/uploads/2019/06/space-indoorfarming000353.jpg',
    span: $t('seminers.seminar22.span'),
    style: 'zoom',
  },
  {
    //宇宙飛行士を目指す会
    name: $t('seminars.seminer21.name'),
    description: $t('seminers.seminer21.discription'),
    status: 'finished',
    url: '/img/seminars/astronaut-seminar.webp',
    span: $t('seminers.seminar21.span'),
    style: 'zoom',
  },
  {
    //天体物理学実習ゼミ
    name: $t('seminars.seminer20.name'),
    description: $t('seminers.seminer20.discription'),
    status: 'finished',
    url: '/img/seminars/astronomy.webp',
    span: $t('seminers.seminar20.span'),
    style: 'zoom',
  },
  {
    //CanSatゼミ
    name: $t('seminars.seminar20.name'),
    description: $t('seminars.seminar20.discription'),
    status: 'finished',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHemaPwNiQ7bEQu6z_VywbmiyExFgTl08Pg&usqp=CAU',
    span: $t('seminars.seminar20.span'),
    style: 'zoom',
  },
  {
    //電磁気学入門
    name: $t('seminars.seminar18.name'),
    description: $t('seminars.seminar18.discription'),
    status: 'finished',
    url: 'https://pbs.twimg.com/media/FZyTs1iaAAAjgYV?format=jpg&name=large',
    span: $t('seminars.seminar18.span'),
    style: 'zoom',
  },
  {
    //電子回路設計
    name: $t('seminars.seminar17.name'),
    description: $t('seminars.seminar17.discription'),
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/71dO80D6gcL.jpg',
    span: $t('seminars.seminar17.span'),
    style: 'zoom',
  },
  {
    //宇宙ビジネス
    name: $t('seminars.seminar16.name'),
    description: $t('seminars.seminar16.discription'),
    status: 'finished',
    url: 'https://pbs.twimg.com/media/FZKGoZ0UcAE7HRh?format=jpg&name=large',
    span: $t('seminars.seminar16.span'),
    style: 'zoom',
  },
  {
    //宇宙法入門
    name: $t('seminars.seminar15.name'),
    description: $t('seminars.seminar15.discription'),
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81QQOTHOiSL.jpg',
    span: $t('seminars.seminar15.span'),
    style: 'zoom',
  },
  {
    //天文検定
    name: $t('seminars.seminar14.name'),
    description: $t('seminars.seminar14.discription'),
    status: 'finished',
    url: '/img/seminars/tenmon-uchu-kentei.webp',
    span: $t('seminars.seminar14.span'),
    style: 'zoom',
  },
  {
    //宇宙の物理
    name: $t('seminars.seminar13.name'),
    description: $t('seminars.seminar13.discription'),
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81XAjp79rRL.jpg',
    span: $t('seminars.seminar13.span'),
    style: 'hybrid',
  },
  {
    //流体力学
    name: $t('seminars.seminar12.name'),
    description: $t('seminars.seminar12.discription'),
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/5178936V07L._SX353_BO1,204,203,200_.jpg',
    span: $t('seminars.seminar12.span'),
    style: 'zoom',
  },
  {
    //宇宙システム入門
    name: $t('seminars.seminar11.name'),
    description: $t('seminars.seminar11.discription'),
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41F1M118NXL._SX337_BO1,204,203,200_.jpg',
    span: $t('seminars.seminar11.span'),
    style: 'zoom',
  },
  {
    //天文学
    name: $t('seminars.seminar10.name'),
    description: $t('seminars.seminar10.discription'),
    status: 'finished',
    url: '/img/seminars/astronomy.webp',
    span: $t('seminars.seminar10.span'),
    style: 'zoom',
  },
  {
    //衛星データ解析
    name: $t('seminars.seminar9.name'),
    status: 'finished',
    url: 'https://www.tellusxdp.com/cmn/img/ogp.jpg',
    span: $t('seminars.seminar9.span'),
    style: 'zoom',
  },
  {
    //宇宙工学入門 [体験版]
    name: $t('seminars.seminar8.name'),
    description: $t('seminars.seminar8.discription'),
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51rZrV0V8IL._SX357_BO1,204,203,200_.jpg',
    span: $t('seminars.seminar8.span'),
    style: 'zoom',
  },
  {
    //軌道力学
    name: $t('seminars.seminar7.name'),
    description: $t('seminars.seminar7.discription'),
    status: 'finished',
    url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
    span: $t('seminars.seminar7.span'),
    style: 'hybrid',
  },
  {
    //画像処理
    name: $t('seminars.seminar6.name'),
    description: $t('seminars.seminar6.discription'),
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41FCF736uWL._SX352_BO1,204,203,200_.jpg',
    span: $t('seminars.seminar6.span'),
    style: 'zoom',
  },
  {
    //物理数学
    name: $t('seminars.seminar5.name'),
    description: $t('seminars.seminar5.discription'),
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51oYFb4Ri4L._SX321_BO1,204,203,200_.jpg',
    span: $t('seminars.seminar5.span'),
    style: 'hybrid',
  },
  {
    //Space English
    name: $t('seminars.seminar4.name'),
    description: $t('seminars.seminar4.discription'),
    status: 'finished',
    url: 'https://image.freepik.com/free-vector/colorful-galaxy-background-with-astronaut_52683-307.jpg',
    span: $t('seminars.seminar4.span'),
    style: 'zoom',
  },
  {
    //宇宙工学入門
    name: $t('seminars.seminar3.name'),
    description: $t('seminars.seminar3.discription'),
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51rZrV0V8IL._SX357_BO1,204,203,200_.jpg',
    span: $t('seminars.seminar3.span'),
    style: 'zoom',
  },
  {
    //ゼロから始めるCAD
    name: $t('seminars.seminar2.name'),
    description: $t('seminars.seminar2.discription'),
    status: 'finished',
    url: '/img/seminars/zerocad.webp',
    span: $t('seminars.seminar2.span'),
    style: 'zoom',
  },
  {
    //軌道力学2nd
    name: $t('seminars.seminar1.name'),
    description: $t('seminars.seminar1.discription'),
    status: 'finished',
    url: '/img/seminars/kidorikigaku2.webp',
    span: $t('seminars.seminar1.span'),
    style: 'zoom',
  },
];
