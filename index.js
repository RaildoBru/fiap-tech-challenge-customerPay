import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Pool  from 'pg';
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/docs/swagger.js";

import  customerRoutes from "./src/routes/customer.routes.js"

import { paymentCreate } from "./src/services/payment.service.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('OK');
});

app.use('/customer', customerRoutes);
app.use('/payment', paymentCreate)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`API Gateway rodando na porta ${PORT}`));


//const PORT = process.env.PORT || 3002;
//app.listen(PORT, () => {
//  console.log(`Serviço de clientes rodando na porta ${PORT}`);
//});


/*
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const userRoutes = require("./routes/user.routes");
const swaggerSpec = require("./docs/swagger");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});
 
*/