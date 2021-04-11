import RepositoryModel from '../_common/models/repository.model';

interface IListRepositoryUseCase {
  listByCreatedAscOrder(): Promise<RepositoryModel[]>
}

export default IListRepositoryUseCase;
