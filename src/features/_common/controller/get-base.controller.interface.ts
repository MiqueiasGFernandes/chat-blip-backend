import Response from './response.type';

interface IGetBaseController {
  get(): Promise<Response>
}

export default IGetBaseController;
