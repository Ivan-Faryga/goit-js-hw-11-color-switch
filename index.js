const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('[data-action ="start"]'),
    btnStop: document.querySelector('[data-action ="stop"]'),
    body: document.body,
}

let colorSwitchIntervalId = null;

// ============== функция генерации случайного числа

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//=============== функция для получения случайного индекса из массива

const getRandomColor = (array) => array[randomIntegerFromInterval(0, array.length - 1)];
console.log(getRandomColor);

// ================== Слушатели событий

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

// =================== колбеки для слушателей событий ============================================

function onBtnStartClick(e) {
    // ==================  запускаем интервал, если его ID равно NULL, в противном случае - return
    if (!colorSwitchIntervalId) {
        colorSwitchIntervalId = setInterval(() => {
        refs.body.setAttribute("style", `background-color: ${getRandomColor(colors)}`)
    }, 1000)
    }
    return;
};


function onBtnStopClick(e) {
    console.log('stop')
    clearInterval(colorSwitchIntervalId);
};


