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
    return this.api.post('https://api.ase-lab.space/api/contact', {
      name,
      email,
      status,
      body,
    });
  }
}
