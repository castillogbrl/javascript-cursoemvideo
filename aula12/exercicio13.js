/* 
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/

var now = new Date();
var weekDay = now.getDay();

switch (weekDay) {
  case 0:
    console.log(`Today is Sunday.`);
    break;
  case 1:
    console.log(`Today is Monday.`);
    break;
  case 2:
    console.log(`Today is Tuesday.`);
    break;
  case 3:
    console.log(`Today is Wednesday.`);
    break;
  case 4:
    console.log(`Today is Thursday.`);
    break;
  case 5:
    console.log(`Today is Friday.`);
    break;
  case 6:
    console.log(`Today is Saturday.`);
    break;
  default:
    console.log(`Couldn't fetch the day.`);
    break;
}
