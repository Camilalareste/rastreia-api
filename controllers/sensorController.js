exports.getSensorData = (req, res) => {
  const data = {
    umidade: Math.floor(Math.random() * 100),
    ph: (Math.random() * (7.5 - 5.5) + 5.5).toFixed(2),
    temperatura: Math.floor(Math.random() * (35 - 18) + 18)
  };
  res.json(data);
};

exports.postManualData = (req, res) => {
  console.log('Dados manuais recebidos:', req.body);
  res.status(201).json({ message: 'Dados manuais registrados com sucesso!', dados: req.body });
};

exports.postSensorFromRaspberry = (req, res) => {
  console.log('Dados recebidos do Raspberry Pi:', req.body);
  res.status(201).json({ message: 'Dados do sensor recebidos com sucesso!', sensorData: req.body });
};