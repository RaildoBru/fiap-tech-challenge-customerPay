import axios from 'axios';
import dotenv from 'dotenv';
import { response } from 'express';
import { MercadoPagoConfig, Payment } from 'mercadopago';

dotenv.config();

const MERCADOPAGO_ACCESS_TOKEN = 'TEST-3880641801499571-021519-92f7c561f1a4fa184ab33463c0ce17bd-529700452';
//const MERCADOPAGO_API_URL = 'https://api.mercadopago.com/v1/payments';
// Step 1: Import the parts of the module you want to use

// Step 2: Initialize the client object
const client = new MercadoPagoConfig({ 
    accessToken: MERCADOPAGO_ACCESS_TOKEN, options: { timeout: 5000, idempotencyKey: 'IDEMPOTENCY_KEY' } 
});

// Step 3: Initialize the API object
const payment = new Payment(client);

// Step 4: Create the request object

// Step 5: Create request options object - Optional
const requestOptions = {
	idempotencyKey: 'IDEMPOTENCY_KEY',
};

const paymentCreate = async (req, res) => {
    try {                
        const body = {
	        transaction_amount: req.body['transaction_amount'],
	        description: req.body['description'],
	        payment_method_id: req.body['payment_method_id'],
	        payer: {
		        email: req.body['payer']['email']
	        },
        };

        const paymentResponse = await payment.create({ body });
        const response = {
            "qr_code" : paymentResponse['point_of_interaction']['transaction_data']["qr_code"],
            "url" : paymentResponse['point_of_interaction']['transaction_data']['ticket_url']  
        };        
        return res.json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro' });
    }
  };
  
  export { paymentCreate };