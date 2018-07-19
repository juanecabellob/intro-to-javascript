const expression = /* Schreibe deinen Namen für den regulären Ausdruck */;
function runRegExp() {
    let text = /* Greife auf den Element zu, indem es der reguläre Ausdruck laufen soll */
    console.log(text);
    /*
        Wenn der reguläre Ausdruck nicht gefunden wurde, zeige den Label
    */
}

let replaceExpression = /* Schreibe deinen Namen für den regulären Ausdruck */;
function replaceText() {
    let haystack = /* Greife auf den Element zu, indem es der reguläre Ausdruck laufen soll */
    let replaceWith = /* Greife auf den Element zu, worin der Ersatztext steht */
    let newText = /* Ersetzte den Text */
    document.getElementById('playground-text').value = /* Weise den neuen Text zu */
}

let runner = document.getElementById('runner');
let replace = document.getElementById('replace');
runner.addEventListener('click', runRegExp);
replace.addEventListener('click', replaceText);