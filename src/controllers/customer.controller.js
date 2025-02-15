import Customer from "../models/customer.model.js";

const cadastrarCliente = async (req, res) => {
  try {
    const cliente = await Customer.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar cliente' });
  }
};

const identificarCliente = async (req, res) => {
  try {
    
    const cliente = await Customer.findByDocument(req.params.documento);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao buscar cliente' });
  }
};

export { cadastrarCliente, identificarCliente };
