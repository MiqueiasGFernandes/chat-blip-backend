import RepositoryModel from '../../_common/models/repository.model';

interface IGetFiveFirstRepositories {
  getFiveFirst(repositoresList: RepositoryModel[]): RepositoryModel[]
}

export default IGetFiveFirstRepositories;
