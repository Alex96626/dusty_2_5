// 1
let question = prompt('Какую эмоджи видишь?')
alert(`Не ${question}, а говна`)

// 2
let question2 = prompt('Введите сумму');
let num = Math.floor(question / 1000);
alert(`${num}к`);

// 3
let askQuestionBtn = document.querySelector('#ask')
askQuestionBtn.addEventListener('click', askQuestion);
function askQuestion() {
    const question3 = prompt('Введите любой текст');
    alert(`Все говорят ${question3}, да ${question3}, а ты купи слона`);
}

// 4
    let question4 = prompt('Введите первое значение');
    let question5 = prompt('Введите второе значение');

    console.log(`Переменная question4 равна ${question4}`);
    console.log(`Переменная question5 равна ${question5}`);
    [question4, question5] = [question5, question4];
    console.log(`Переменная question4 равна ${question4}`);
    console.log(`Переменная question5 равна ${question5}`);