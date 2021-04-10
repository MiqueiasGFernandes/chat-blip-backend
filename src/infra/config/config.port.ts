interface IConfigPort {
  getString(key: string): string,
  getBoolean(key: string): boolean,
  getList(key: string): unknown[],
  getNumber(key: string): number,
}

export default IConfigPort;
