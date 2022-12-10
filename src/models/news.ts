import { $t } from 'src/boot/i18n';

export type NewsTagType = 'お知らせ';


export const NEWS_TAG_COLOR: {
  [key in NewsTagType]: string;
} = {
  お知らせ: 'green-14',
};

export interface INews {
  title: string;
  tag: NewsTagType;
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
];
