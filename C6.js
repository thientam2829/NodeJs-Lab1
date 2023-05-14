const readline = require('readline');
const x = 10 + Math.round(5 * Math.random());
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hãy nhập vào một số (từ 10 đến 15): ', (a) => {
  if (a == x) {
    console.log("Chúc mừng,bạn đã đoán đúng!");
  } else if (a > x) {
    console.log("Giá trị của bạn lớn hơn số bí mật.");
  } else {
    console.log("Giá trị của bạn nhỏ hơn số bí mật.");
  }
  rl.close();
});
