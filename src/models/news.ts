import { $t } from 'src/boot/i18n';
export type NewsTagType = 'お知らせ' | 'note更新';

export const TAG: {
  [key in NewsTagType]: string;
} = {
  お知らせ: $t('news.news1.tag'),
  note更新: $t('news.news9.tag'),
} as const;

export const NEWS_TAG_COLOR: {
  [key in NewsTagType]: string;
} = {
  お知らせ: 'green-14',
  note更新: 'blue-14',
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
    title: $t('news.news4.title'),
    tag: 'お知らせ',
    date: '2023.07.09',
    url: 'https://twitter.com/ASE_lab_/status/1677996019756433411',
  },
  {
    title: $t('news.news5.title'),
    tag: 'note更新',
    date: '2023.07.26',
    url: 'https://note.com/ase_lab_/n/nfce2bdb8aa57',
  },
  {
    title: $t('news.news6.title'),
    tag: 'note更新',
    date: '2023.10.28',
    url: 'https://note.com/ase_lab_/n/n3c4b6983b07f',
  },
  {
    title: $t('news.news7.title'),
    tag: 'note更新',
    date: '2023.10.29',
    url: 'https://note.com/ase_lab_/n/nd871348dc8aa',
  },
  {
    title: '「衛星データ解析ワークショップ　イベントレポート」を公開しました。',
    tag: 'note更新',
    date: '2023.12.18',
    url: 'https://note.com/ase_lab_/n/n6c17eed303ef',
  },
  {
    title: $t('news.news10.title'),
    tag: 'お知らせ',
    date: '2024.01.12',
    url: 'https://x.com/ASE_lab_/status/1745762547847053519?s=20',
  },
  {
    title: $t('news.news9.title'),
    tag: 'note更新',
    date: '2024.01.22',
    url: 'https://note.com/ase_lab_/n/n225ee1530dad',
  },
];
