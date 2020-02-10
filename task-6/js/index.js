'use strict';

/*
ЗАДАНИЕ 6:
Напиши скрипт который просит посетителя ввести число в prompt до тех пор, 
пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение 
к общей сумме.

    При загрузке страницы пользователю предлагается в prompt ввести число. 
    Ввод добавляется к значению переменной total.

    Операция ввода числа продолжается до тех пор, 
    пока пользователь не нажмет кнопку Cancel в prompt.

    После того как пользователь прекратил ввод нажав кнопку Cancel, 
    показать alert со строкой 'Общая сумма чисел равна [сумма]'.

*/


class sumOfNumbers {
    constructor (number) {
        this._numbers = [];
    };

    totalSum() {
        const sum = this._numbers.reduce((acc, num) => acc + num, 0);
        return alert(`Общая сумма чисел равна ${sum}`);
    }

    go() {
        let giveNumber;
        do {
            giveNumber = prompt('Введите число');
            const toNumber = Number(giveNumber);

            const toDo = Number.isNaN(toNumber) ?
            alert(`Это не число`)
            : this._numbers.push(toNumber);
        } while(giveNumber !== null);

        this.totalSum();
    };
};

const newGamer = new sumOfNumbers();
newGamer.go();


