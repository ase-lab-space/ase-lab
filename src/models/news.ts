import { $t } from 'src/boot/i18n';
import { NewsTagType } from 'src/repositories/microcms_repository';

export const TAG: {
  [key in NewsTagType]: string;
} = {
  お知らせ: $t('news.tag.notice'),
  note更新: $t('news.tag.note'),
} as const;

export const NEWS_TAG_COLOR: {
  [key in NewsTagType]: string;
} = {
  お知らせ: 'green-14',
  note更新: 'blue-14',
};
