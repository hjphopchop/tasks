/* Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами:
 через квадратные скобки и как свойство объекта:  */
 /* let obj = {
     a : 1,
     b : 2,
     c : 3
 };
 alert(obj.c);
 alert(obj["c"]); */

/*  Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.  */

/* let obj = {
    "Kolya" : 23000,
    "Piter" : 12450
}
alert(obj.Kolya + " " + obj.Piter); */

/* Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
 (понедельник - первый и т.д.). Выведите на экран текущий день недели.  */

/*  let obj = {
    1 : "monday",
    2 : "tuestay",
    3 : "wednesday",
    4 : "thursday",
    5 : "friday",
    6 : "saturday",
    7 : "sunday",
};

alert(obj["6"]); */


/*  Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
  Выведите день недели, соответствующий значению переменной day.  */

  /*  let obj = {
     1 : "monday",
     2 : "tuestay",
     3 : "wednesday",
     4 : "thursday",
     5 : "friday",
     6 : "saturday",
     7 : "sunday",
 };
 
 let day = prompt("What is day today? (number)" , "");
 alert(obj[day]); */
/*  let str = "Прохожу курс на #coursera по #javascript";
 let str2 = str.split(" ");
 let i = 0;
 let str3 = [];

 while ( i < str2.length) {
     if (str2 [i] [0] =="#") {
            str3.push(str2[i]);
     }
     
     i++;
 }
let str4 = str3.join("");
let str5 = str4.split("#");
str5.splice(0, 1);
alert(str);
alert(str2);
alert(str3);
alert(str4);
alert(str5);
alert(str5[0]);
 */

function century(year) {
    let centur = +year / 100;
    if (centur % 100 != 0)
    {
        centur++;
    }
    return Math.floor(centur);
   /*   if (year.length <=2) {
      return 1;
      
    }
     let ch = [year.length - 1];
      if (year.charAt(ch) >=1 && year.length >2) {
      return (+year.substring(0, year.length-2) + 1);
    } 
     else {
      return +year.substring(0, year.length -2);
  }   
   */
 /* let ch = [year.length - 1];
 
 return (year.charAt(ch)); */
  }

  alert(century("540980"));