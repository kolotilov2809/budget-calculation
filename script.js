'use strict'

let money;
let time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();


let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
        
            if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a!='' && b!='' && a.length<50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                console.log ("bad result");
                i--;
            }
            
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.budjet < 100) {
            console.log('Низкий доход');
        } else if (appData.budjet > 100 && appData.budjet < 2000) {
            console.log('Средний доход');
        } else if (appData.budjet > 2000) {
            console.log('Высокий доход');
        } else {
            console.log('Ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        //Написать проверку, что пользователь может:
        /* - Ввести в дополнительных доходах (chooseIncome) только строку
        - Не может оставить строку пустой
        - Не может отменить вопрос */
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
        //При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome) Товары должны начинаться с 1, а не с 0.
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }


};
//Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
/* let a1 = prompt('Введите обязательную статью расходов в этом месяце'),
    a2 = prompt('Во сколько обойдется?'),
    a3 = prompt('Введите обязательную статью расходов в этом месяце'),
    a4 = prompt('Во сколько обойдется?');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4; */



/* let i = 0;
while (i<2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a!='' && b!='' && a.length<50) {
            console.log('done');
            appData.expenses[a] = b;
    
} else {
    console.log ("bad result");
    i--;
}
    i++;
} */
/* let i = 0;
do {
     let a = prompt ("¬ведите об¤зательную статью расходов в этом мес¤це", ""),
        b = prompt ("¬о сколько обойдетс¤?", "");

   if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

    console.log ("done");

    appData.expenses[a] = b;
     } else {
         console.log ("bad result");
          i--;
     }

    i++;
 }
 while(i < 2); */