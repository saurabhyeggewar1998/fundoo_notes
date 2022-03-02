import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { Auth } from '../middlewares/auth.middleware';


const router = express.Router();



//route to create a new user
router.post('/userregister', newUserValidator, userController.userRegistration);

//route to login 

router.get('/login', userController.login);

//rote to forget password

router.get('/forgetPassword', userController.forgetPassword);

//rote to reset password


router.put('/resetPassword',Auth,userController.resetPassword); 

export default router;
