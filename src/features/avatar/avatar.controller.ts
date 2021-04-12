import { delay, inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';
import IGetBaseController from '../_common/controller/get-base.controller.interface';
import AvatarService from './avatar.service';

@injectable()
class AvatarController implements IGetBaseController {
  private readonly avatarService: AvatarService;

  constructor(@inject(delay(() => AvatarService)) avatarService: AvatarService) {
    this.avatarService = avatarService;
  }

  public async get(_request: Request, response: Response): Promise<void> {
    try {
      const result = await this.avatarService.getAvatar();
      response.send({
        sucessfully: true,
        body: result,
        statusCode: 200,
      });
    } catch (error) {
      console.error(error);
      const { statusCode } = error;
      response.send({ statusCode: statusCode || 500, message: error.message, successfully: false });
    }
  }
}

export default AvatarController;
