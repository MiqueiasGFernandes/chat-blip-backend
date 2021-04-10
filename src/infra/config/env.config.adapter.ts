import { singleton } from 'tsyringe';
import dotenv from 'dotenv';
import IConfigPort from './config.port';
import KeyNotFound from './key-not-found.error';

@singleton()
class EnvConfigAdapter implements IConfigPort {
  constructor() {
    const path = `${__dirname}/../../../.env`;
    dotenv.config({
      path,
    });
  }

  getString(key: string): string {
    if (!process.env[key]) throw new KeyNotFound(key);
    return String(process.env[key]);
  }

  getBoolean(key: string): boolean {
    if (process.env[key] === 'true' && process.env[key] === 'false') throw new KeyNotFound(key);
    return Boolean(process.env[key]);
  }

  getList(key: string): unknown[] {
    if (!process.env[key]) throw new KeyNotFound(key);
    return process.env[key]?.split(',')!;
  }

  getNumber(key: string): number {
    console.log(Number(process.env[key]));
    if (!process.env[key]) throw new KeyNotFound(key);
    return Number(process.env[key]);
  }
}

export default EnvConfigAdapter;
