import { $t } from 'src/boot/i18n';
export type NewsTagType = 'お知らせ';

export const TAG: {
  [key in NewsTagType]: string;
} = {
  お知らせ: $t('news.news1.tag'),
} as const;

export const NEWS_TAG_COLOR: {
  [key in NewsTagType]: string;
} = {
  お知らせ: 'green-14',
};

export interface INews {
  title: string;
  tag: keyof typeof TAG;
  date: string;
  url?: string;
}

export const news: INews[] = [
  {
    title: $t('news.news1.title'),
    tag: 'お知らせ',
    date: '2022.09.09',
    url: '/pdf/ASE-Lab. ガイドブック.pdf',
  },
  {
    title: $t('news.news2.title'),
    tag: 'お知らせ',
    date: '2023.02.24',
    url: '/pdf/ASE-Lab. ガイドブック.pdf',
  },
  {
    title: $t('news.news3.title'),
    tag: 'お知らせ',
    date: '2023.03.24',
    url: 'https://www.instagram.com/ase__lab/',
  },
  {
    title: 'メンバー200名突破！',
    tag: 'お知らせ',
    date: '2023.07.09',
    url: 'https://twitter.com/ASE_lab_/status/1677996019756433411',
  },
];
