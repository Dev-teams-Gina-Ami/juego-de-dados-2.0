import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import { databaseConfiguration } from '../infrastructure/database/connection';

const app = express();
const server = http.createServer(app);
dotenv.config();

databaseConfiguration().then(() => {
    server.listen(process.env.PORT, () => {
        console.log('Servidor funcionando en http://localhost:3000');
    });
});
