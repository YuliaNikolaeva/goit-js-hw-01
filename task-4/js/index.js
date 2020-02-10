'use strict';

/*
Задание 4
а счету пользователя есть 23580 кредитов, 
значение хранится в переменной credits (создай и присвой). 
Пользователь решает купить ремонтных дроидов, 
которые стоят по 3000 кредитов за штуку. 
Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество 
дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

    Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 
    'Отменено пользователем!'.

    В противном случае, рассчитывает общую цену заказа и 
    сохраняет в переменной totalPrice.

    Проверяет сможет ли пользователь оплатить заказ:
        если сумма к оплате превышает количество кредитов на счету, 
        выводи в консоль сообщение 'Недостаточно средств на счету!'.
        в противном случае необходимо посчитать остаток кредитов 
        на счету и вывести сообщение 'Вы купили [число] дроидов, 
        на счету осталось [число] кредитов.'.

*/

const orderProfile = {
    credits: 23580,
    pricePerDroid: 3000,
    quantity: prompt('Сколько дроидов хотите купить?'),
}

const BuyEquipment = function({credits, pricePerDroid, quantity}) {
    this.credits = credits;
    this.price = pricePerDroid;
    this.quantity = quantity;

    this.inputIsCorrect = function() {
       this.quantity === null ?
        console.log('Отменено пользователем!')
        : Number.isNaN(Number(this.quantity))?
        console.log('Некорректный ввод!')
        : this.order(Number(this.quantity));
    };

    this.order = function(num) {
        const balance = this.credits - (this.price * num);
        let mess = balance >= pricePerDroid ?
        `Вы купили ${num} дроидов, на счету осталось ${balance} кредитов.` 
        : 'Недостаточно средств на счету!';

        return console.log(mess);
    };
};

const userBuy = new BuyEquipment(orderProfile);
userBuy.inputIsCorrect();