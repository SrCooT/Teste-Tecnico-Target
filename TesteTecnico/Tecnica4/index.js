// Valores de faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const faturamentoTT = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
  
  // Calcula e exibe o percentual de representação de cada estado
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTT) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  