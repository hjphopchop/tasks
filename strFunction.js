/* Дана строка 'js'. Сделайте из нее строку 'JS'. */ 
/* 
let str = "js";
alert(str.toUpperCase()); */

/* Дана строка 'JS'. Сделайте из нее строку 'js'.  */
/* let str = "JS";
alert(str.toLocaleLowerCase()); */

/* Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.  */
/* let str = 'я учу javascript!';
alert(str.length-1); */

/* Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' ; */

/* let str = 'я учу javascript!';
alert(str.slice(1,5) +" " + str.slice(6,str.length-1)); */

/* Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.  */

/* let str = 'я учу javascript!';
alert(str.indexOf("учу")); */

/* Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу:
 если количество символов этого текста больше заданного в переменной n,
  то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 
  В противном случае в переменную result запишем содержимое переменной str.  */

  /* let str = prompt("ну расскажи свою историю", "");
  let n = 10;
  let result;
  if (str.length >n) {
        str = str.slice(0, n) + "...";
  }
  alert(str); */

/*   Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.  */

/* let str = 'Я-учу-javascript!';
alert (str.replace(/-/g, "!")) */

/* Преобразуйте первую букву каждого слова строки в верхний регистр. */ 

/* let str = "reee ffvv cccf ttrr ew q";
alert(str.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ")); */

/* Преобразуйте строку 'var_test_text' в 'varTestText'. 
Скрипт, конечно же, должен работать с любыми аналогичными строками. 
 */
let str = 'var_test_text';
str = str.split("_").map(x => x[0].toUpperCase() + x.slice(1)).join("");
alert(str[0].toLowerCase() + str.slice(1));

