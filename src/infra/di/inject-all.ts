import InfraProvider from '../infra.provider';
import MainProvider from '../../main/main.provider';
import ListRepositories from '../../features/list-respositories/list-repositories.provider';

class InjectAll {
  public static execute() {
    MainProvider.injectDependencies();
    InfraProvider.injectDependencies();
    ListRepositories.injectDependencies();
  }
}

export default InjectAll;
