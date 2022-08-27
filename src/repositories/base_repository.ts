import { AxiosInstance } from 'axios';
import { api } from 'src/boot/axios';

export abstract class BaseRepository {
  protected api: AxiosInstance;

  constructor() {
    this.api = api;
  }
}
