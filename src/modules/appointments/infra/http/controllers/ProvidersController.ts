import ListProvidersController from '@modules/appointments/services/ListProvidersService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.body;

    const listProviders = container.resolve(ListProvidersController);

    const providers = await listProviders.execute({
      user_id,
    });

    return response.json(providers);
  }
}
