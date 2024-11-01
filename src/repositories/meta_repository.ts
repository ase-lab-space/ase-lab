import { BaseRepository } from './base_repository';

type MetaInfoResponse = {
  memberCount: number;
  universities: string[];
};

export class MetaRepository extends BaseRepository {
  async getMetaInfo() {
    return (
      await this.api.get<MetaInfoResponse>('https://api.ase-lab.space/api/meta')
    ).data;
  }
}
