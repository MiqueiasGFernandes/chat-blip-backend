import EnvironmentConfig from './environment.config';
import ExpressConfig from './express.config';

class AppStart {
  /**
   * @access public
   * @description This method is application entrypoit,
   * avoid change order of internal methods call
   * @returns void
   */
  public static main(): void {
    EnvironmentConfig.loadEnvinronmentVariables();
    ExpressConfig.initializeExpressInstance();
  }
}

export default AppStart;
