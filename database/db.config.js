//import { Pg } from "pg";
import  pg from "pg";

const { Client } = pg
const { Pool } = pg
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
const pool = new Pool({
  host: "database-1.c88mnvj7vw4z.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "Fiap!2025!14:08",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: true
});

/*
console.log("======================================");

const client = new Client({
  host: "database-1.c88mnvj7vw4z.us-east-1.rds.amazonaws.com",
  user: "postgres",  
  password: "Fiap!2025!14:08",
  port: 5432,
  ssl: true
});



const result = await client.query('select * from customer');
console.log(result);
*/

//export default client;
export default pool;



/**
 * 
 * //CONNECTION_STRING=postgres://user:password@host:port/database
//postgres://postgres:Fiap!2025!14:08@database-1.c88mnvj7vw4z.us-east-1.rds.amazonaws.com:5432
const pool = new Client({
  user: 'postgres',
  host: "database-1.c88mnvj7vw4z.us-east-1.rds.amazonaws.com",
  database: 'postgres',
  password: "Fiap!2025!14:08",
  port: 5432,
  ssl: true
});
 * 
 * 
 * 
 * 
 * 
 * console.log(await pool.query('SELECT NOW()'))
 * select now()
POSTGRES_HOST=98.83.172.2
POSTGRES_NAME=postgres
POSTGRES_PASSWORD=Fiap!2025!14:08
import pg from 'pg'
const { Pool } = pg
 
const pool = new Pool({
  host: 'localhost',
  user: 'database-user',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})POSTGRES_PORT=5432

  */