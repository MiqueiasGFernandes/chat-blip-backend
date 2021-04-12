import { Request, Response } from 'express';
import { delay, inject, injectable } from 'tsyringe';
import IGetBaseRepository from '../_common/controller/get-base.controller.interface';
import RepositoryService from './repository.service';

@injectable()
class RepositoryController implements IGetBaseRepository {
  private readonly repositoryServiceInteraction: RepositoryService;

  constructor(
    @inject(delay(() => RepositoryService)) interaction: RepositoryService,
  ) {
    this.repositoryServiceInteraction = interaction;
  }

  public async get(_request: Request, response: Response): Promise<void> {
    try {
      const result = await this.repositoryServiceInteraction.list();
      response.send(result);
    } catch (error) {
      console.error(error);
      response.send({ message: error.message });
    }
  }
}

export default RepositoryController;
