import repositoresListMock from '../../../util/mocks/repositories-list-with-languages.mock';
import RepositoryModel from '../../_common/models/repository.model';
import FilterByLanguageRepositorySpy from '../filter-by-language.service';

describe('filter-by-language.repository', () => {
  describe('GIVEN .filter()', () => {
    describe('WHEN filtered data has a condition', () => {
      test('SHOULD return just items with filtered language', () => {
        const filterByLanguageSpy = new FilterByLanguageRepositorySpy();
        const repositoresMockToModel = repositoresListMock as unknown as RepositoryModel[];
        const sut = filterByLanguageSpy.filter(repositoresMockToModel, 'csharp');
        expect(sut).toHaveLength(2);
      });
    });
    describe('WHEN filtered data has not filtered language', () => {
      test('SHOULD throw an error', () => {
        const filterByLanguageSpy = new FilterByLanguageRepositorySpy();
        const repositoresMockToModel = repositoresListMock as unknown as RepositoryModel[];
        expect(() => filterByLanguageSpy.filter(repositoresMockToModel, 'c')).toThrow();
      });
    });
  });
});
