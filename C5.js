const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Họ tên SV: ', (ten) => {
rl.question('ĐTB: ', (diemTB) => {
    const diem = parseFloat(diemTB);
    let xepLoai = '';
    if (diem >= 5) {
      xepLoai = 'Đậu';
    } else {
      xepLoai = 'Rớt';
    }
    console.log(`Họ tên: ${ten.toUpperCase()}`);
    console.log(`Xếp loại học lực: ${xepLoai}`);
    rl.close();
  });
});