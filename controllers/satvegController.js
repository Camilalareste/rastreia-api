async function getData(req) {
  return {
    satelite: 'NDVI SATVEG',
    status: 'em desenvolvimento',
    dadoSimulado: Math.random().toFixed(2)
  };
}

module.exports = { getData };
