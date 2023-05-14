const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Nhập giá trị a: ', (a) => {
rl.question('Nhập giá trị b: ', (b) => {
    console.log('Cộng:' + (+a + +b));
    console.log('Trừ:'  + (+a - +b));
    console.log('Nhân:' + (+a * +b));
    console.log('Chia:' + (+a / +b));
    rl.close();
  });
});
