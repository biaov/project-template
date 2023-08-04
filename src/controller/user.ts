import { Request, Response } from 'express'
import { User } from '@/model/user'

/**
 * 列表
 */
export const userList = async (req: Request, res: Response) => {
  const userList = await User.findAll({
    order: [['id', 'DESC']]
  })

  res.json(userList)
}

/**
 * 详情
 */
export const userDetail = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) {
    res.status(500).error('服务器错误')
    return
  }
  const data = await User.findOne({
    where: {
      id
    }
  })
  res.success(data)
}
