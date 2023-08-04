import { Sequelize } from 'sequelize'

/**
 * 连接数据库
 */
export const sequelize = new Sequelize('desktop', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
})
