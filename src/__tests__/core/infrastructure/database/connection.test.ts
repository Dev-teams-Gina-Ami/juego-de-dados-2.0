import { databaseConfiguration } from '../../../../infrastructure/database/connection';
import dotenv from 'dotenv';

dotenv.config();

describe('Database Configuration', () => {
    it('should initialize the database and synchronize the tables', async () => {
        const DatabaseInfo = await databaseConfiguration();
        expect(DatabaseInfo.sequelize).not.toBeNull();
        expect(DatabaseInfo.gameModel).not.toBeNull();
        expect(DatabaseInfo.playerModel).not.toBeNull();
    });
});
