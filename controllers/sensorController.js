function getSensorData(req, res) {
  const dadosSimulados = {
    localizacao: {
      latitude: -8.1234,
      longitude: -37.5678,
      municipio: "Petrolina",
      estado: "PE"
    },
    sensores: {
      ph: 6.2,
      temperaturaSolo: "27.4°C",
      nutrientes: {
        nitrogenio: "baixo",
        fosforo: "moderado",
        potassio: "alto"
      },
      carbonoOrganico: "2.1%"
    },
    timestamp: new Date().toISOString()
  };

  res.json(dadosSimulados);
}

module.exports = { getSensorData };
