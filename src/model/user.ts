import { Model, DataTypes } from 'sequelize'
import { sequelize } from '@/config/database'

export class User extends Model {}

User.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user'
  }
)
