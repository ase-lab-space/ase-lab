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

type Article = {
  bodyDigest: MultilingualText;
  date: string; // "2022-04-22T15:00:00.000Z"
  img: MicroCMSImage;
  link: string;
  title: MultilingualText;
};

export type ArticleProps = Article & MicroCMSListContent;

export class MicroCMSRepository extends BaseRepository {
  #client: ReturnType<typeof createClient>;

  constructor() {
    super();
    this.#client = createClient({
      serviceDomain: 'ase-lab',
      apiKey,
    });
  }

  async getArticles(
    { queries }: { queries: MicroCMSQueries | undefined } = {
      queries: undefined,
    }
  ) {
    return this.#client.getAllContents<Article>({
      endpoint: 'articles',
      queries,
    });
  }
}
