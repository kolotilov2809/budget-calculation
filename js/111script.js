'use strict'; // код здесь обрабатывается в строгом режиме

//Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById('start');

// console.log(startBtn);

//Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div> )
let budgetValue = document.getElementsByClassName('budget-value') [0];
let daybudgetValue = document.getElementsByClassName('daybudget-value') [0];
let levelValue = document.getElementsByClassName('level-value') [0];
let expensesValue = document.getElementsByClassName('expenses-value') [0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value') [0];
let incomeValue = document.getElementsByClassName('income-value') [0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value') [0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value') [0];

// console.log(budgetValue);
// console.log(yearsavingsValue);

//Получить поля (input) c обязательными расходами через класс (class=”expenses-item”)
let expensesItem = document.getElementsByClassName('expenses-item');
// console.log(expensesItem);

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
let expensesBtn = document.getElementsByTagName('button') [0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];

//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalExpensesItem);

//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money;
let time;


startBtn.addEventListener('click', function() {
    
    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
    appData.budjet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a!='' && b!='' && a.length<50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log ("bad result");
            i--;
        }
        
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    

    for (let i = 0; i <= optionalExpensesItem.length; i++) {
        let questionOptExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {

if (appData.budjet!= undefined) {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;
    if (appData.budjet < 100) {
        levelValue.textContent = 'Низкий доход';
    } else if (appData.budjet > 100 && appData.budjet < 2000) {
        levelValue.textContent = 'Средний доход';
    } else if (appData.budjet > 2000) {
        levelValue.textContent = 'Высокий доход';
    } else {
        levelValue.textContent = 'Ошибка';
    }
} else {
    daybudgetValue.textContent = 'Ошибка';
}
   
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings = true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
//Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

