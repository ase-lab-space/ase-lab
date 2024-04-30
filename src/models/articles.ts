import { $t } from 'src/boot/i18n';
export interface IArticleProps {
  img: string;
  title: string;
  bodyDigest: string;
  date: string;
  url: string;
}

export const articles: IArticleProps[] = [
  {
    img: '/img/laughing_max.webp',
    title: $t('articles.person1.title'),
    bodyDigest: $t('articles.person1.digest'),
    date: '2022/04/23',
    url: 'https://note.com/ase_lab_/n/nb899b1739d39',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/80067536/rectangle_large_type_2_fe2fcccac357a2fbe53ca3aa8183e129.jpeg',
    title: $t('articles.person2.title'),
    bodyDigest: $t('articles.person2.digest'),
    date: '2022/06/05',
    url: 'https://note.com/ase_lab_/n/nd873fcb66048',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/82287733/rectangle_large_type_2_0ff0e012818c4ca826bbd090d4f2355d.jpeg',
    title: $t('articles.person3.title'),
    bodyDigest: $t('articles.person3.digest'),
    date: '2022/07/09',
    url: 'https://note.com/ase_lab_/n/nb85dc1be333f',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/86050214/rectangle_large_type_2_bd20eea8c3cdf1920ae5fa8034f5e80a.jpeg',
    title: $t('articles.person4.title'),
    bodyDigest: $t('articles.person4.digest'),
    date: '2022/09/03',
    url: 'https://note.com/ase_lab_/n/n257e02a41d76',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/91650285/rectangle_large_type_2_5bc8804c6cc339be7f0066147f95f3d1.png',
    title: $t('articles.person5.title'),
    bodyDigest: $t('articles.person5.digest'),
    date: '2022/10/09',
    url: 'https://note.com/ase_lab_/n/n2f0c02416e3e',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/90685888/rectangle_large_type_2_49767739b162c9a3458f0f084623e60d.jpeg',
    title: $t('articles.person6.title'),
    bodyDigest: $t('articles.person6.digest'),
    date: '2022/11/10',
    url: 'https://note.com/ase_lab_/n/nc83a6bb0a31d',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/91860062/rectangle_large_type_2_725b7582c151bdc4d92d2b2aa541eb1a.jpeg',
    title: $t('articles.intern1.title'),
    bodyDigest: $t('articles.intern1.digest'),
    date: '2022/11/24',
    url: 'https://note.com/ase_lab_/n/n25b330c5ff46',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/93835557/rectangle_large_type_2_715c2a5daefb1ee101653f678547b6a5.jpeg',
    title: $t('articles.person7.title'),
    bodyDigest: $t('articles.person7.digest'),
    date: '2022/12/23',
    url: 'https://note.com/ase_lab_/n/n5937a4acb783',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/97683299/rectangle_large_type_2_2c2e163bb20d20d330c1e9c56f84270c.png',
    title: $t('articles.event1.title'),
    bodyDigest: $t('articles.event1.digest'),
    date: '2023/02/12',
    url: 'https://note.com/ase_lab_/n/ne64cc4cd347d',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/98340947/rectangle_large_type_2_2dd63c9ff076a571ae8ee57c6121e3cd.png',
    title: $t('articles.event2.title'),
    bodyDigest: $t('articles.event2.digest'),
    date: '2023/02/19',
    url: 'https://note.com/ase_lab_/n/neeaabf82815f',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/98902924/rectangle_large_type_2_91cbc9605e039b2c4e0b7c49d96db32d.png',
    title: $t('articles.person8.title'),
    bodyDigest: $t('articles.person8.digest'),
    date: '2023/02/27',
    url: 'https://note.com/ase_lab_/n/nc91544ce6673',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/101058499/rectangle_large_type_2_23ebd1d893c77efcacb8e47c69154b27.jpeg',
    title: $t('articles.person9.title'),
    bodyDigest: $t('articles.person9.digest'),
    date: '2023/03/29',
    url: 'https://note.com/ase_lab_/n/n3ae9e0c96b65',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/104413143/rectangle_large_type_2_c4fc975856ac6d31d9abe8693408b30f.jpeg',
    title: $t('articles.person10.title'),
    bodyDigest: $t('articles.person10.digest'),
    date: '2023/05/06',
    url: 'https://note.com/ase_lab_/n/n02e3528a80a0',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/110534554/rectangle_large_type_2_ba2b07783f1ccc3c3b5ddce2bd93e276.jpeg',
    title: $t('articles.person11.title'),
    bodyDigest: $t('articles.person11.digest'),
    date: '2023/07/26',
    url: 'https://note.com/ase_lab_/n/nfce2bdb8aa57',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/120147307/rectangle_large_type_2_124825c34dc93eb3c4ef1b65e571905f.jpeg',
    title: $t('articles.event3.title'),
    bodyDigest: $t('articles.event3.digest'),
    date: '2023/10/28',
    url: 'https://note.com/ase_lab_/n/n3c4b6983b07f',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/120148919/rectangle_large_type_2_d1fe5db1bce2009132d41ba6b581015d.jpeg',
    title: $t('articles.event4.title'),
    bodyDigest: $t('articles.event4.digest'),
    date: '2023/10/29',
    url: 'https://note.com/ase_lab_/n/nd871348dc8aa',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/124925429/rectangle_large_type_2_766d55544066e7fc2e378c822db95e59.jpeg',
    title: $t('articles.event5.title'),
    bodyDigest: $t('articles.event5.digest'),
    date: '2023/12/18',
    url: 'https://note.com/ase_lab_/n/n6c17eed303ef',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/128379232/rectangle_large_type_2_68b58f307f5f60fc8f0348f4402c61e2.png',
    title: $t('articles.person12.title'),
    bodyDigest: $t('articles.person12.digest'),
    date: '2024/1/22',
    url: 'https://note.com/ase_lab_/n/n225ee1530dad',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/136460344/rectangle_large_type_2_e1a9a2184acbe227761fb17e6f434a1f.png',
    title: $t('articles.person13.title'),
    bodyDigest: $t('articles.person13.digest'),
    date: '2024/4/7',
    url: 'https://note.com/ase_lab_/n/nc581787347b5',
  },
];
