interface IGithubApiPort {
  get(url: unknown, headers?: unknown): Promise<Record<string, unknown>[]>
}

export default IGithubApiPort;
