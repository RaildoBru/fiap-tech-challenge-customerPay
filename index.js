import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Pool  from 'pg';
import bodyParser from "body-parser";

import  customerRoutes from "./src/routes/customer.routes.js"

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('OK');
});
app.use('/customer', customerRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`API Gateway rodando na porta ${PORT}`));


//const PORT = process.env.PORT || 3002;
//app.listen(PORT, () => {
//  console.log(`Serviço de clientes rodando na porta ${PORT}`);
//});
