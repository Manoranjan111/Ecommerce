import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';


import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/router.js';

const app = express();

dotenv.config();  

app.use(cors()); 
app.use(bodyParser.json( {extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME; 
const PASSWORD = process.env.DB_PASSWORD; 

Connection(USERNAME, PASSWORD);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

// DefaultData();  

// export let paytmMerchantKey = process.env.PAYTAM_MERCHANT_KEY;
// export let paytmParams = {};
// paytmParams['MID'] = process.env.PAYTAM_MID;
// paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
// paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
// paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
// paytmParams['ORDER_ID'] = uuid();
// paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
// paytmParams['TXN_AMOUNT'] = '100';
// paytmParams['CALLBACK_URL'] = 'http://localhost/8000/callback';
// paytmParams['email'] = 'admin@admin.com';
// paytmParams['MOBILE_NO'] = '1234567890'; 


