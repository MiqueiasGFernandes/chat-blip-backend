import repositoriesListWithLanguagesMock from '../../../../util/mocks/repositories-list-with-languages.mock';
import RepositoryModel from '../../../_common/models/repository.model';
import GetFiveFirstRepositoriesService from '../get-five-first-repositories.service';

describe('get-five-first.service', () => {
  describe('GIVEN .getFiveFirst()', () => {
    test('SHOULD return an array with five first items', () => {
      const getFiveFirstRepositoriesSpy = new GetFiveFirstRepositoriesService();
      const sut = getFiveFirstRepositoriesSpy
        .getFiveFirst(repositoriesListWithLanguagesMock as unknown as RepositoryModel[]);
      expect(sut).toHaveLength(5);
    });
  });
});
