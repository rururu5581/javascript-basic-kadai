// 変数numは15
let num = 15;
 
// 変数numの値を出力する（確認用）
console.log(num);

// 3または5の倍数かを判定する
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} else if (num % 3 === 0) {
  console.log('3の倍数です');
} else if (num % 5 === 0) {
  console.log('5の倍数です');
} else {
  console.log('num');
}