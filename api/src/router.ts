import { Router } from "express";
import { auth } from "./middleware/auth";
import AuthController from "./controller/auth/authController";
import UsuarioController from "./controller/usuarios/usuarioController";

const router = Router();
router.use(AuthController);
router.use(auth, UsuarioController)
export default router;