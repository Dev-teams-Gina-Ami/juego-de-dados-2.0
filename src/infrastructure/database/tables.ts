import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';

export function createGameModel(sequelize: Sequelize): ModelStatic<Model>{
  const GameTable = sequelize.define(
    'games',
    {
      id_game: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },

      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },

      has_won: {
          type: DataTypes.TINYINT,
          allowNull: false
      },

      winnerNumber: {
        type: DataTypes.TINYINT,
        allowNull: false
      },
      
      dice1_value: {
        type: DataTypes.TINYINT,
        allowNull: false
      },

      dice1_value: {
        type: DataTypes.TINYINT,
        allowNull: false
      },

        dice2_value: {
            type: DataTypes.TINYINT,
            allowNull: false
        }, 
    }, {
        tableName: 'games',
        indexes: [
            {
            unique: true,
            fields: ['id_game'],
            name: 'id_play_UNIQUE',
            },
            {
            fields: ['player_id'],
            name: 'game_player_id_idx',
            },
        ],
        engine: 'InnoDB',
    });
    
    GameTable.belongsTo(sequelize.models.players, {
        foreignKey: 'player_id',
    });
    
    return GameTable;
}

export function createPlayerModel(sequelize: Sequelize): ModelStatic<Model> {
    const PlayerTable = sequelize.define(
      'players',
      {
        id_player: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: DataTypes.CHAR(50),
          allowNull: false
        },
        total_plays: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        total_wins: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        tableName: 'players',
        indexes: [
          {
            fields: ['id_player'],
            name: 'id_player_idx'
          }
        ],
        engine: 'InnoDB'
      }
    );
    //falta implementar la relacion entre las tablas:
    // PlayerTable.hasMany(sequelize.models.game, {
    //   foreignKey: 'player_id',
    //   constraints: false, // Set to true if you want to enable ON DELETE and ON UPDATE actions
    //   as: 'player'
    // });
  
    return PlayerTable;
  }
