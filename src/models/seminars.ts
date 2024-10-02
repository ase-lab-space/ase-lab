import { StatusType, StyleType } from 'src/repositories/microcms_repository'; // こちらを正しい場所に修正

export const STATUS: {
  [key in StatusType]: { [locale: string]: string }
} = {
  募集中: {
    ja: '募集中',
    en: 'Wanted',
  },
  進行中: {
    ja: '進行中',
    en: 'In Progress',
  },
  終了済み: {
    ja: '終了済み',
    en: 'Finished',
  },
};

export const STATUS_COLOR: {
  [key in StyleType]: string;
} = {
  zoom: 'red',
  hybrid: 'blue',
  'face-to-face': 'green',
};
