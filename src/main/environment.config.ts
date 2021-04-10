import dotenv from 'dotenv';

class EnvironmentConfig {
  public static loadEnvinronmentVariables(): void {
    dotenv.config({
      path: `${__dirname}/../.env`,
    });
  }
}

export default EnvironmentConfig;
