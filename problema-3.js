const fs = require('fs');

// Lê o JSON
const dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));

// Filtra apenas os dias com faturamento > 0
const diasComFaturamento = dados.filter(dia => dia.valor > 0);

if (diasComFaturamento.length === 0) {
  console.log("Não há dias com faturamento positivo.");
  process.exit();
}

// Calcula menor e maior valor
const menor = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maior = Math.max(...diasComFaturamento.map(dia => dia.valor));

// Calcula média
const soma = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
console.log(soma)
const media = soma / diasComFaturamento.length;

// Conta quantos dias estão acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > media).length;

// Resultado
console.log(`Menor faturamento do mês: R$ ${menor.toFixed(2)}`);
console.log(`Maior faturamento do mês: R$ ${maior.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
