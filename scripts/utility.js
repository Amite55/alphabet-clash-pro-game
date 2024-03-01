function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
};
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementByValue(elementId, value){
    const element= document.getElementById(elementId);
    element.innerText= value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getRendomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const rendomNumber = Math.random()*25;
    const index = Math.round(rendomNumber);

    const alphabet = alphabets[index]
    // console.log(index, alphabet);
    return alphabet;
}