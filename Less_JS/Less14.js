"use strict";
console.log('arr' + '- object');
console.log(4 + +"5"); // + который ставится перед объектом называется УНАРНЫМ

    //чем отличается префиксная форма от постфиксной формы
    //Когда мы ставим операторы перед значением --incr это префиксная
    //Когда мы ставим операторы после значением decr-- это постфиксной
    //оператор ИНКРИМЕНТА т.е. увиличения на единуцу
    //оператор ДЕКРИМЕНТА т.е. уменьшение на единицу
    let incr =10,
    decr = 10;

    //incr++;
    //decr--;
    console.log(--incr);
    console.log(decr);

    console.log(5%2); // покаывает остаток от числа т.е на сколько мы мсожем максимально разделить 5 а остаток запишем в ответ
    console.log(2*4 == 8); // == сравнение, === строгое сравнение


    const isChecked = true,
          isClose = false,
          isOpen = true;
        //  console.log(isChecked && isClose);// оператор И && возвращает true только если оба оператора будут правдивы
          console.log(isChecked || isClose); // оператор Или || возвращает true если хотябы один из аргументов будет правдивым true

          console.log(isChecked || !isClose); // ! - это оператор отрицания 
          console.log(2+2*2 != 8); // != определяется как НЕ РАВЕН
          console.log(2+2*2 !== '6'); //проверка строго по типу
          console.log(2+2*2 != '6');