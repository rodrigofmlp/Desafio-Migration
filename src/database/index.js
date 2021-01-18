import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);
  }
}

export default new DataBase();
