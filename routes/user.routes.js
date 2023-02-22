import {Router} from 'express'
import UserController from '../src/controllers/user.controller.js'
const router = Router()

const userController = new UserController();

// router.get('/', (req, res) => res.send('Holis'));
router.get('/', userController.index)
router.get('/:id', userController.show)
router.post('/', userController.create)
router.delete('/:id', userController.destroy)
router.put('/:id', userController.update)
router.delete('/:id', userController.destroy)


export default router;