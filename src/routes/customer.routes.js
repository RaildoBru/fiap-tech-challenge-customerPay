import express from "express";
import { cadastrarCliente, identificarCliente } from "../controllers/customer.controller.js";

const router = express.Router();

router.post('/', cadastrarCliente);
router.get('/:documento', identificarCliente);

export default router;
