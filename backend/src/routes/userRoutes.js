import { Router } from "express";
import { isAuthenticated } from "../middlewares/authentication.js";

import { registerUser, loginUser, logoutUser, getUser, forgetPassword, resetPassword } from "../controllers/userController.js";



const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getuser', isAuthenticated, getUser);
router.get('/logout', isAuthenticated, logoutUser);

router.post('/forgetpassword', forgetPassword);
router.put('/resetPassword/:resetToken', resetPassword)


export default router;