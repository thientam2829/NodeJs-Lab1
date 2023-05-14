const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nhập hệ số a: ', (a) => {
rl.question('Nhập hệ số b: ', (b) => {
rl.question('Nhập hệ số c: ', (c) => {
      const delta = b * b - 4 * a * c;
      if (delta < 0) {
        console.log('Phương trình vô nghiệm');
      } else if (delta === 0) {
        const x = -b / (2 * a);
        console.log(`Phương trình có nghiệm kép: x = ${x}`);
      } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
      }
      rl.close();
    });
  });
});
