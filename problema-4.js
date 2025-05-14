const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Soma total
  const total = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
  
  // Calcula percentual e imprime
  console.log("Percentual de representação por estado:\n");
  for (const estado in faturamentoPorEstado) {
    const valor = faturamentoPorEstado[estado];
    const percentual = (valor / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  