/* Выведите столбец чисел от 1 до 100. */
/* let i;
for ( i=0;i<=99;i++)
{
    document.write(i + "<br>")
} */
/* Выведите столбец чисел от 11 до 33. */
/* let i=11;
while (i<=33)
{
    document.write(i + "<br>");
    i++;
} */
/* Выведите столбец четных чисел в промежутке от 0 до 100. */
/* let i;
for (i =0; i<=100; i++)
{
    if(i % 2 ==0)
    {
        document.write(i + "<br>");
    }
} */
/* С помощью цикла найдите сумму чисел от 1 до 100. */
/* let i,
sum=0;
for (i = 1; i <= 100; i++)
{
    sum = sum + i;
}
document.write(sum); */
/* Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.  */
/* let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
} */

/* Дан массив с элементами [1, 2, 3, 4, 5]. 
С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.  */
/* let arr = [1, 2, 3, 4, 5 ];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}
alert(result); */

/* Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.  */
/* const obj = {
    green: 'зеленый', 
    red  : 'красный', 
    blue : 'голубой'
}
for(let i in obj) {
    alert(i);
    alert(obj[i]);
} */

/* Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
 С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.  */
 /* const obj = {
     Коля : 200,
     Вася : 300,
     Петя : 400,
 }
    for (let i in obj) {
        alert (i + " - зарплата " + obj[i] + '$');
 } */

/*  Дан массив с элементами 2, 5, 9, 15, 0, 4. 
 С помощью цикла for и оператора if
  выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.  */
/*   let arr = [2, 5, 9, 15, 0, 4];
  for (let i = 0; i< arr.length; i++){
    if (arr[i] >3 && arr[i] < 10) {
        alert(arr[i]);
    }
  }
 */
/* Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.  */

/* let arr = [2, -10, 1, -100, 0, -1000, 3];
let result = 0;
for (let item of arr) {
    if (item > 0){
        result += item;
    }
}
alert (result); */

/* Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if
 проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла.
  Если нет - ничего делать не надо.  */
  /* const arr = [1, 2, 5, 9, 4, 13, 4, 10];
  for (let item of arr) {
      if (item = 4) {
          alert("Есть!");
          break;
      }
  } */

/*   Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
   Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.  */

 /*   const chr = ["1", "2", "5"];
   let arr = [10, 20, 30, 50, 235, 3000].filter(e=>chr.includes(e.toString()[0]));
   alert(arr);
        */
     /*   Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.  */
     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     /* let ree = [];
     ree.length = arr.length*2 + 1
     for (let i =0; i < ree.length; i++) {
        for(let j = 0; j<arr.length;j++) {
         if(i % 2 == 0) {
            ree[i] = "-";
         }
         else {
            ree[i] = arr[j]; 
        }
        }
    }
    
        alert (ree); */
      /*   for (let i =0; i < arr.length; i++) {
            arr[i] = arr[i] + "-";
        }
        alert(arr); */
/* 
        Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
         Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла),
          и запишите его в переменную num.  */

let n = 1000;
let counter = 0;
while (n>50) {
    n /= 2;
    counter++ ;
}
alert ("1:  " + n + " // 2: " + counter );
