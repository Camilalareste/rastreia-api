const registros = []; // Simulação em memória por enquanto

const salvarRegistro = (req, res) => {
  const {
    tipoFonte,
    tipoRegistro,
    pessoa,
    instituicao,
    latitude,
    longitude,
    dados,
    origem,
    imagemBase64
  } = req.body;

  if (!pessoa || !pessoa.nome || !pessoa.cpfOuCnpj) {
    return res.status(400).json({ error: 'Dados da pessoa (nome e CPF/CNPJ) são obrigatórios.' });
  }

  const registro = {
    id: registros.length + 1,
    tipoFonte,
    tipoRegistro,
    pessoa,
    instituicao: instituicao || 'UFRPE',
    latitude,
    longitude,
    dados,
    origem,
    imagemBase64,
    dataRegistro: new Date().toISOString()
  };

  registros.push(registro);

  res.status(201).json({
    message: "Registro salvo com sucesso",
    idRegistro: registro.id,
    timestamp: registro.dataRegistro
  });
};

const listarRegistros = (req, res) => {
  const { propriedade, tipoFonte, cpfOuCnpj } = req.query;
  let resultado = registros;

  if (tipoFonte) resultado = resultado.filter(r => r.tipoFonte === tipoFonte);
  if (cpfOuCnpj) resultado = resultado.filter(r => r.pessoa.cpfOuCnpj === cpfOuCnpj);

  res.json(resultado);
};

module.exports = { salvarRegistro, listarRegistros };
