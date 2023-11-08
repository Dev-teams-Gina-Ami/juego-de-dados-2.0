import express from 'express';
import dotenv from 'dotenv';
import { databaseConfiguration, databaseInfo } from '../infrastructure/database/connection';
import { gameRouter } from '../application/routes/GameRoutes'
import { GameRepositoriesImpl } from '../infrastructure/repositories/GameRepositoriesImpl';
import { playerRouter } from '../application/routes/PlayerRoutes';


const app = express();
dotenv.config();

databaseConfiguration().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Servidor funcionando en http://localhost:3000');
    GameRepositoriesImpl.GameModel = databaseInfo.gameModel;
  });
});

app.use('/api/player', playerRouter);
app.use('/api/games', gameRouter);
