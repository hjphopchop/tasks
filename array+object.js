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

/* function century(year) {
    let centur = +year / 100;
    if (centur % 100 != 0)
    {
        centur++;
    }
    return Math.floor(centur); */
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
  /* }

  alert(century("540980")); */
  /* function insertDash(num) {
    mas = num.split("").forEach(function(item,i,mas) {
        if(mas[i] % 2 != 0){
            mas =mas.splice(i,0, "-");
        }
    });
    return mas; */

      /*  let mas = [];
       mas = num.split("");
    let i =0;
    while (i < mas.length) {
         if (mas[i] % 2 != 0) { 
          mas.map(mas.splice(i,0, "-"));
          }
          i++;
        }
       return mas.join("");  */
    /* }
    console.log(insertDash("243569786")); */
    alert( "\u{1F60D}" );
/*     Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.  */
/* let arr = ["a", "b", "c"];
alert(arr); */
/* С помощью массива arr из предыдущего номера выведите на экран
 содержимое первого, второго и третьего элементов.  */
 /* let arr = ["a", "b", "c"];
 alert(arr[0] +" " + arr[1] + " " + arr[2]); */
/*  Создайте массив arr = ['a', 'b', 'c', 'd'] 
 и с его помощью выведите на экран строку 'a+b, c+d'. */
 /* let arr = ['a', 'b', 'c', 'd'];
 alert(arr[0]+ " + " + arr[1] + ", " + arr[2] + " + " + arr[3]);  */
/*  Создайте массив arr с элементами 2, 5, 3, 9. 
 Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
 Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.  */
 /* let arr = [2, 5, 3, 9];
 let result = arr[0] * arr[1] + arr[2] * arr[3];
 alert(result); */
/*  Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.  */
 /* let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
 alert(arr[1][0]); */
/*  Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}.
  Выведите с его помощью слово 'jQuery'.  */
 /*  let obj = {
      js  : ['jQuery', 'Angular'],
      php :'hello',
      css : 'world',
  }
  alert(obj.js[0]); */
  /* Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. 
  Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски,
   а второй - по-английски. Выведите с помощью этого массива
    понедельник по-русски и среду по английски (пусть понедельник - это нулевой день). */
    /* let obj = {
        ru : ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вскр'] ,
        en : ['mn', 'tu', 'w', 'th', 'fr', 'saturday', 'sunday'],
    } 
    alert(obj.ru[0] + " " + obj.en[2]); */

/*     Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то),
     а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. 
     То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.  */
     let obj = {
        ru : ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вскр'] ,
        en : ['mn', 'tu', 'w', 'th', 'fr', 'saturday', 'sunday'],
     }
     let lang = prompt("lang", "");
     let day = +prompt("day", "");
     alert(obj[lang][day-1]);