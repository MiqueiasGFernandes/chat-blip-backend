import IGetBaseController from '../../features/_common/controller/get-base.controller.interface';

interface IServerPort {
  get(path: string, callback: IGetBaseController): Promise<void>
  closeConnection(): void
}

export default IServerPort;
