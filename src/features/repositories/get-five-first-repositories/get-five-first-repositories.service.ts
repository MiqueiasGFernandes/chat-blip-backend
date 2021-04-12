import RepositoryModel from '../../_common/models/repository.model';
import IGetFiveFirstRepositories from './get-five-first-repositories.use-case';

class GetFiveFirstRepositoriesService implements IGetFiveFirstRepositories {
  getFiveFirst(repositoresList: RepositoryModel[]): RepositoryModel[] {
    const fiveFirstRepositories = repositoresList.slice(0, 5);
    return fiveFirstRepositories;
  }
}

export default GetFiveFirstRepositoriesService;
