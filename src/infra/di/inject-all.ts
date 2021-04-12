import 'reflect-metadata';
import InfraProvider from '../infra.provider';
import MainProvider from '../../main/main.provider';
import RepositoriesProvider from '../../features/repositories/repositories.provider';

class InjectAll {
  public static execute() {
    InfraProvider.injectDependencies();
    RepositoriesProvider.injectDependencies();
    MainProvider.injectDependencies();
  }
}

export default InjectAll;
