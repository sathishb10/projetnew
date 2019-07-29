import { Router } from 'express'

import {
  userRegistration,
  userLogin,
  viewProfile,
  updateProfile,
  viewFiles,
  downloadFiles,
  viewKey,
  getUsers,
  sendAgentFiles,
  viewAgentFiles,
  downloadAgentFiles,
  rating
} from './controller'

const router = new Router()

router.post('/registration', userRegistration)

router.get('/userlogin', userLogin)

router.get('/viewprofile', viewProfile)

router.put('/updateprofile/:id', updateProfile)

router.get('/viewfiles', viewFiles)

router.get('/downloadFiles/:id', downloadFiles)

router.get('/viewkey', viewKey)

router.get('/getusers', getUsers)

router.post('/sendagentfiles', sendAgentFiles)
router.post('/rating', rating)

router.get('/viewagentfiles', viewAgentFiles)

router.get('/downloadAgentFiles/:id', downloadAgentFiles)

export default router
