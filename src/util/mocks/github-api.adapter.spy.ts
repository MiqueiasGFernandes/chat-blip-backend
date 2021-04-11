/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HeadersInit, RequestInfo } from 'node-fetch';
import repositoresList from './repositories-list';
import IGithubApiPort from '../../infra/github-api/github-api.port';

class GithubApiAdapterSpy implements IGithubApiPort {
  public async get(url: RequestInfo, headers?: HeadersInit): Promise<Record<string, unknown>[]> {
    return Promise.resolve(repositoresList);
  }
}

export default GithubApiAdapterSpy;
