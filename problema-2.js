const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
  const numero = parseInt(input);

  let a = 0;
  let b = 1;

  while (a < numero) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  if (a === numero) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
  }

  rl.close();
});
