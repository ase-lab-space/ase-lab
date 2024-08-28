import { BaseRepository } from './base_repository';

const endpoint =
  'https://script.google.com/macros/s/AKfycbz4np5rSyNA5qL5fXZI9V0Z0SjqINKUBG6t3cYMeCCXibSPR6ilNbeGT6O14wzGyYv-/exec';

export class GASRepository extends BaseRepository {
  sendConfirmationEmail({
    name,
    email,
    body,
    locale,
  }: {
    name: string;
    email: string;
    body: string;
    locale: string;
  }) {
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('email', email);
    params.append('body', body);
    params.append('locale', locale);
    return this.api.post(endpoint, params);
  }
}
