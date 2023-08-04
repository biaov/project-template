import { Model, DataTypes } from 'sequelize'
import { sequelize } from '@/config/database'

export class ShortChain extends Model {}

ShortChain.init(
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'ShortChain',
    tableName: 'short_chain'
  }
)
