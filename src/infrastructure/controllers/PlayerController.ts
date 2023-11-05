import { Request, Response } from 'express';
import { PlaysCounter } from '../../application/PlaysCounter';

export class PlayerController {
  constructor(private readonly playsCounter: PlaysCounter) {}

  async execute(req: Request, res: Response) {
    const playerId = req.params.id;
    console.log(playerId);

    await this.playsCounter.exectue(playerId);

    res.status(200).send();
  }
}
