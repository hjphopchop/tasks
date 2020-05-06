/* Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения. */

/* let str = "azzzzz";
alert(str.charAt(0).toUpperCase() +str.slice(1)) ;
alert(str[0].toUpperCase() +str.substring(1)) ;
 */

/* Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл */

/* let str = "123456";
alert(str.split("").reverse().join("")); */

/* Проверьте, что строка начинается на http:// */

/* let str = "http://ddrfcrd";
alert (/^http:\/\//.test(str)); */

let str = "index.html";
alert(/.html$/.test(str));