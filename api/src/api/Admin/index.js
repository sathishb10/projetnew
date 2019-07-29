import { Router } from 'express'

import {
  adminLogin,
  viewUsers,
  sendFiles,
  deleteFiles,
  viewFiles,
  downloadFiles,
 viewLeakFiles ,
  downloadLeakFiles

} from './controller'

const router = new Router()

router.get('/adminlogin', adminLogin)

router.get('/viewusers', viewUsers)

router.post('/sendfiles', sendFiles)

router.get('/viewfiles', viewFiles)

router.get('/downloadFiles/:id', downloadFiles)

router.delete('/:id', deleteFiles)

router.get('/viewleakfiles', viewLeakFiles)

router.get('/downloadLeakFiles/:id', downloadLeakFiles)

export default router
