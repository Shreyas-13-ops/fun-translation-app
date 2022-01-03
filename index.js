const inputText = document.getElementById('text');
const outputDiv = document.getElementById('display-output')
const translateBtn = document.getElementById('btn-translate');

translateBtn.addEventListener('click', clickHandler);

// API limit 5 requests/hour
let URL = 'https://api.funtranslations.com/translate/yoda.json';
// For testing - open
let serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';


function clickHandler(){
    //read the value of input text
    let input = inputText.value;

    //calling server for processing
    fetch(getTranslationURL(input))
    .then(response => response.json())
    .then(json => {
        //store value of key=translated
        let translatedText = json.contents.translated;
        //add the value to DOM element
        outputDiv.innerText = translatedText;})
    .catch(err => console.log(`Error occured --> ${err}`))
}

function getTranslationURL(text){
    return `${URL}?text=${text}`;
}
