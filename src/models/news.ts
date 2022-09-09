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
    title: 'ASE-Lab. ゼミガイドブックが公開されました。',
    tag: 'お知らせ',
    date: '2022.09.09',
    url: '/pdf/ASE-Lab. ガイドブック.pdf',
  },
];
