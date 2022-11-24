import { $t } from "src/boot/i18n";
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
    bodyDigest:
      $t('articles.person1.digest'),
    date: '2022/04/23',
    url: 'https://note.com/ase_lab_/n/nb899b1739d39',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/80067536/rectangle_large_type_2_fe2fcccac357a2fbe53ca3aa8183e129.jpeg',
    title: $t('articles.person2.title'),
    bodyDigest:
      $t('articles.person2.digest'),
    date: '2022/06/05',
    url: 'https://note.com/ase_lab_/n/nd873fcb66048',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/82287733/rectangle_large_type_2_0ff0e012818c4ca826bbd090d4f2355d.jpeg',
    title: $t('articles.person3.title'),
    bodyDigest:
      $t('articles.person3.digest'),
    date: '2022/07/09',
    url: 'https://note.com/ase_lab_/n/nb85dc1be333f',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/86050214/rectangle_large_type_2_bd20eea8c3cdf1920ae5fa8034f5e80a.jpeg',
    title: $t('articles.person4.title'),
    bodyDigest:
      $t('articles.person4.digest'),
    date: '2022/09/03',
    url: 'https://note.com/ase_lab_/n/n257e02a41d76',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/88084122/rectangle_large_type_2_6e843800e75f869272214a4b9786cbbc.png?width=2000&height=2000&fit=bounds&quality=85',
    title: $t('articles.person5.title'),
    bodyDigest:
      $t('articles.person5.digest'),
    date: '2022/10/09',
    url: 'https://note.com/ase_lab_/n/n2f0c02416e3e',
  },

];
