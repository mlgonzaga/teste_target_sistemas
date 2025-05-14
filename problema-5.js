const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma string para inverter: ', (input) => {
  let invertida = '';
  for (let i = input.length - 1; i >= 0; i--) {
    invertida += input[i];
  }

  console.log('String invertida:', invertida);
  rl.close();
});


