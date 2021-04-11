import IConfigPort from '../../infra/config/config.port';

class EnvConfigAdapter implements IConfigPort {
  getBoolean(key: string): boolean {
    return Boolean(key);
  }

  getList(key: string): unknown[] {
    return [key];
  }

  getNumber(key: string): number {
    return Number(key);
  }

  getString(key: string): string {
    return key;
  }
}

export default EnvConfigAdapter;
