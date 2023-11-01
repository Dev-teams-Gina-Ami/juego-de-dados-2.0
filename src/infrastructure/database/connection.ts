import { Model, ModelStatic, Sequelize } from 'sequelize';
import { createGameModel } from './tables';

async function createDatabaseAndConnect() : Promise<Sequelize | null>{
  const databaseName = 'juego_de_dados';

  const sequelizeWithoutDB = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'password',
  });

  try {
    await sequelizeWithoutDB.authenticate();
    console.log("Conectado al servidor MySQL.");
  } catch (err) {
    console.error("Error de conexión a SQL:", err);
    return null;
  }
  
  try {
    await sequelizeWithoutDB.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`);
    console.log(`La base de datos "${databaseName}" ha sido creada o ya existe.`);
  } catch (err) {
    console.error("Error creando la base de datos:", err);
    return null;
  }

  await sequelizeWithoutDB.close();

  const sequelizeWithDB = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'password',
    database: databaseName,
  });

  try {
    await sequelizeWithDB.authenticate();
    console.log(`Coonectado a la base de datos "${databaseName}" con Sequelize.`);
  } catch (err) {
    console.error(`Error conectando a la base de datos "${databaseName}":`, err);
    return null
  }

  return sequelizeWithDB;
}

interface DatabaseInfo {
  sequelize: Sequelize | null;
  GameModel: ModelStatic<Model> | null; 
  //playerModel: ModelStatic<Model> | null;
}

export const databaseInfo: DatabaseInfo = {
  sequelize: null,
  GameModel: null,
  //playerModel: null,
};

export async function databaseConfiguration() : Promise<DatabaseInfo> { 
  try{
      const sequelize = await createDatabaseAndConnect();

      if(sequelize instanceof Sequelize) {
          const GameModel = await createGameModel(sequelize);
          //const playerModel = await createPlayerModel(sequelize);

          databaseInfo.sequelize = sequelize;
          databaseInfo.GameModel = GameModel;
          //databaseInfo.playerModel = playerModel;

          sequelize.sync({ force: false }) // Set force to true to drop and recreate the table
            .then(() => {
                console.log('Table synced successfully');
            })
            .catch((error) => {
                console.error('Error syncing table:', error);
            });

      }else{
          console.error("sequelize es nulo, revisa la base de datos");
      }
  }catch(error){
      console.error("Error initializing the database:", error);
  }

  return databaseInfo;
}



