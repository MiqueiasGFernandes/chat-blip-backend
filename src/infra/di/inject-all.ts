import 'reflect-metadata';
import InfraProvider from '../infra.provider';
import MainProvider from '../../main/main.provider';
import RepositoriesProvider from '../../features/repositories/repositories.provider';

class InjectAll {
  public static execute() {
    MainProvider.injectDependencies();
    InfraProvider.injectDependencies();
    RepositoriesProvider.injectDependencies();
  }
}

export default InjectAll;
