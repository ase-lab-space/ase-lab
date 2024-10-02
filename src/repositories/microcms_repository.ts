import { BaseRepository } from './base_repository';
import {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
  createClient,
} from 'microcms-js-sdk';

const apiKey = 'Cn3RFlipPeX3mPlgpQoLY6gAvArL3BUTGaY6';

type MultilingualText = {
  fieldId: 'text';
  ja: string;
  en: string;
  [key: string]: string | undefined;
};

type Meta = {
  participantNumber: number;
  univs: string;
};

type Article = {
  bodyDigest: MultilingualText;
  date: string; // "2022-04-22T15:00:00.000Z"
  img: MicroCMSImage;
  link: string;
  title: MultilingualText;
};

export type ArticleProps = Article & MicroCMSListContent;

export type NewsTagType = 'お知らせ' | 'note更新';
type News = {
  title: MultilingualText;
  tag: NewsTagType[];
  date: string; // "2022-04-22T15:00:00.000Z"
  url?: string;
};

export type NewsProps = News & MicroCMSListContent;

export type StatusType = '募集中' | '進行中' | '終了済み';
export type StyleType = 'zoom' | 'hybrid' | 'face-to-face';
type Seminars = {
  name: MultilingualText;
  description: MultilingualText;
  img: MicroCMSImage;
  span: MultilingualText;
  status: StatusType[];
  tags: StyleType[];
  tagsData?: { text: string; color: string }[];
};

export type SeminarsProps = Seminars & MicroCMSListContent;

export class MicroCMSRepository extends BaseRepository {
  #client: ReturnType<typeof createClient>;

  constructor() {
    super();
    this.#client = createClient({
      serviceDomain: 'ase-lab',
      apiKey,
    });
  }

  async getMeta() {
    return this.#client.getObject<Meta>({
      endpoint: 'meta',
    });
  }

  async getArticles(
    { queries }: { queries: MicroCMSQueries | undefined } = {
      queries: undefined,
    }
  ) {
    return this.getList<ArticleProps>('articles', queries);
  }

  async getNews(
    { queries }: { queries: MicroCMSQueries | undefined } = {
      queries: undefined,
    }
  ) {
    return this.getList<NewsProps>('news', queries);
  }

  async getSeminars(
    { queries }: { queries: MicroCMSQueries | undefined } = {
      queries: undefined,
    }
  ) {
    return this.getList<SeminarsProps>('seminars', queries);
  }

  private async getList<T>(
    endpoint: string,
    queries: MicroCMSQueries | undefined
  ) {
    if (queries?.limit) {
      return (
        await this.#client.getList<T>({
          endpoint,
          queries,
        })
      ).contents;
    }
    return this.#client.getAllContents<T>({
      endpoint,
      queries,
    });
  }
}
