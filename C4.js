const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Nhập một giá trị: ', (a) => {
  if (isNaN(a)) {
    console.log(`${a} không phải là số`);
  } else {
    console.log(`${a} là số`);
  }
  rl.close();
});