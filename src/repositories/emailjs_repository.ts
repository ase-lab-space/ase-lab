import { EmailJSResponseStatus, send } from '@emailjs/browser';
import { BaseRepository } from './base_repository';

export class EmailJSRepository extends BaseRepository {
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
  }): Promise<EmailJSResponseStatus> {
    return send(
      'service_l6niwy4',
      'template_u36ny2r',
      {
        name,
        email,
        status,
        body,
      },
      'user_UdBeQl08zUEhs9grdeS90'
    );
  }
}
