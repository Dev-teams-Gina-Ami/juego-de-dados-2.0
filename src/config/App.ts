import express from 'express';
import dotenv from 'dotenv';
import { databaseConfiguration, databaseInfo } from '../infrastructure/database/connection';
import { gameRouter } from '../application/routes/GameRoutes'
import { GameRepositoriesImpl } from '../infrastructure/repositories/GameRepositoriesImpl';


const app = express();
dotenv.config();

databaseConfiguration().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor funcionando en 127.0.0.1:${process.env.PORT}`);
    GameRepositoriesImpl.GameModel = databaseInfo.gameModel;
  });
});

app.use('/api/games', gameRouter);
