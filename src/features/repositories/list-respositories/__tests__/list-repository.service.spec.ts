import 'reflect-metadata';
import ConfigPortSpy from '../../../../util/mocks/env.config.adapter.spy';
import GithubApiAdapterSpy from '../../../../util/mocks/github-api.adapter.spy';
import ListRepositoryService from '../list-repository.service';

type SpyTypes = {
  githubApiAdapterSpy: GithubApiAdapterSpy
  configPortSpy: ConfigPortSpy
}

function makeSpy(): SpyTypes {
  const githubApiAdapterSpy = new GithubApiAdapterSpy();
  const configPortSpy = new ConfigPortSpy();
  return {
    githubApiAdapterSpy,
    configPortSpy,
  };
}

describe('list-repository.service', () => {
  describe('GIVEN .list()', () => {
    describe('WHEN data is sucessfully fetched', () => {
      test('SHOULD return an RepositoryModel', async () => {
        const { githubApiAdapterSpy, configPortSpy } = makeSpy();
        const serviceSpy = new ListRepositoryService(githubApiAdapterSpy, configPortSpy);
        const sut = await serviceSpy.listByCreatedAscOrder();
        expect(sut).toBeInstanceOf(Array);
      });
    });
  });
});
