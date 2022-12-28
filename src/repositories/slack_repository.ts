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
      'https://xgmflq3mfb.execute-api.ap-northeast-1.amazonaws.com/default/notifyContactFormSubmission',
      {
        name,
        email,
        status,
        body,
      }
    );
  }
}
