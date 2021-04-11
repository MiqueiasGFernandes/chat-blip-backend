import fetch, { HeadersInit, RequestInfo } from 'node-fetch';
import ExternalApiError from './external-api.error';
import IGithubApiPort from './github-api.port';

class NodeFetchAdapter implements IGithubApiPort {
  public async get(url: RequestInfo, headers?: HeadersInit): Promise<Record<string, unknown>[]> {
    const result = await fetch(url, {
      headers,
    });
    if (!result.ok) {
      throw new ExternalApiError(url, 'get');
    }
    const responseJson = await result.json();
    return responseJson;
  }
}

export default NodeFetchAdapter;
