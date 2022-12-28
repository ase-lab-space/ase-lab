import { BaseRepository } from './base_repository';

export class SlackRepository extends BaseRepository {
  notifyContactForm({
    name,
    email,
    status,
    body,
  }: {
    name: string;
    email: string;
    status: string;
    body: string;
  }): Promise<void> {
    return this.api.post(
      'https://a5osgbixql5fz7bznby76py3iy0hguya.lambda-url.ap-northeast-1.on.aws/',
      {
        name,
        email,
        status,
        body,
      }
    );
  }
}
