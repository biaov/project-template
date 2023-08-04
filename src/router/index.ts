import { Router, Request, Response } from 'express'
import { userList, userDetail } from '@/controller/user'
import { shortChainList, shortChainDetail, shortChainCreate, shortChainDelete } from '@/controller/short-chain'

export const router = Router()

// 用户
router.get('/user', userList)
router.get('/user/:id', userDetail)

// 短链
router.get('/short-chain', shortChainList)
router.get('/short-chain/:id', shortChainDetail)
router.post('/short-chain', shortChainCreate)
router.delete('/short-chain/:id', shortChainDelete)
