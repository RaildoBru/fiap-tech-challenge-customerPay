//import  fromCamel from  postgres;
//import { v4 as uuidv4  } from uuid;
import  pool  from "../../database/db.config.js";
//import  client  from "../../database/db.config.js";

class Customer {
  /*static async create({ nome, email, documento }) {
    const id = uuidv4();
    await pool.query(
      'INSERT INTO customer (id, nome, email, documento) VALUES ($1, $2, $3, $4)',
      [id, nome, email, documento]
    );
    return { id, nome, email, documento };
  }
*/
  static async findByDocument(documento) {
    const query = "select name, email, document from customer where document = $1";
    const result = await pool.query( query, [documento]);
    return result.rows[0];
  }
}

export default Customer;
