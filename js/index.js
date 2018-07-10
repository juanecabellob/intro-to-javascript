const expression = /Juan/gi;
function runRegExp() {
    let text = document.getElementById('playground-text').value;
    console.log(text);
    if (expression.test(text)) {
        alert('Found!');
    } else {
        alert('Not found!');
    }
}

let replaceExpression = /Juan/gi;
function replaceText() {
    let text = document.getElementById('playground-text').value;
    let newText = text.replace(replaceExpression, 'Marcel');
    document.getElementById('playground-text').value = newText;
}

let runner = document.getElementById('runner');
let replace = document.getElementById('replace');
runner.addEventListener('click', runRegExp);
replace.addEventListener('click', replaceText);