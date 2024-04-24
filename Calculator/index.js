let expression = '';
let history = [];
const storedHistory = localStorage.getItem('calculatorHistory');
if (storedHistory) {
        history = JSON.parse(storedHistory);
        updateHistoryView(); // Update the history display
    }


function addToDisplay(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        
        if(expression.length>=3 && (/[+\-*/]/.test(expression)))
        {
        const result = eval(expression);
        addToHistory(expression + ' = ' + result);
        expression = result.toString();
        document.getElementById('display').value = expression;
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function displayHistory(){
    if(document.getElementById('hDisplay').style.display =='none')
    {
        document.getElementById('hDisplay').style.display = 'flex';
    
    }
    else{
        {
        document.getElementById('hDisplay').style.display = 'none';
    }
    }

}
function addToHistory(entry) {
    history.push(entry);
    if (history.length > 10) {
        history.shift();
    }
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
    
    updateHistoryView();
}

function updateHistoryView() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}
