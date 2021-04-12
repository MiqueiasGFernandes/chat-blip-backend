import 'reflect-metadata';
import ToLimeCollectionService from '../to-lime-collection.service';
import repositoriesMock from '../../../../util/mocks/repositories-list-with-languages.mock';
import RepositoryModel from '../../../_common/models/repository.model';

describe('to-lime-collection.service', () => {
  describe('GIVEN .toLime()', () => {
    describe('WHEN successfully', () => {
      test('SHOULD return an matches format object', () => {
        const avatarMock = 'avatar.png';
        const toLimeServiceSpy = new ToLimeCollectionService();
        const sut = toLimeServiceSpy
          .toLime({
            avatar: avatarMock,
            fiveFirstRepositories: repositoriesMock as unknown as RepositoryModel[],
          });
        expect(sut).toHaveProperty('itemType');
      });
    });
  });
});
