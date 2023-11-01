import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';

export function createGameModel(sequelize: Sequelize) : ModelStatic<Model> {
    const GameTable = sequelize.define('games', {
        id_game: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        player_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },

        has_won: {
            type: DataTypes.BOOLEAN,
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

    /*
    GameTable.belongsTo(PlayerTable, {
        foreignKey: 'player_id',
    });
    */

    return GameTable;
}

/*
export function createPlayerModel(sequelize: Sequelize) : ModelStatic<Model> {
    const PlayerTable = new ModelStatic<Model>(); //Simplemente para que no de error, se puede eliminar.
    return PlayerTable;
}
*/
