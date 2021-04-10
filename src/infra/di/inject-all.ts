import InfraProvider from '../infra.provider';
import MainProvider from '../../main/main.provider';

class InjectAll {
  public static execute() {
    MainProvider.injectDependencies();
    InfraProvider.injectDependencies();
  }
}

export default InjectAll;
