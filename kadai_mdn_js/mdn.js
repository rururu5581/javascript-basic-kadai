const specificDate = new Date(2024, 9, 12);
const year = specificDate.getFullYear(); //2024
const month = specificDate.getMonth()+1; //10
const day = specificDate.getDate(); //12
//Consoleに出力
console.log(year + '年' + month + '月' + day + '日');