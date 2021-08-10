var translateBtn= document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var output= document.querySelector(".output")

var serverUrl= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getServerUrl(text){
  return serverUrl +"?"+"text="+text
}


function handleBtnClick(userInput){
var userInput= txtInput.value;

fetch(getServerUrl(userInput))
.then(response => response.json())
.then(json => console.log(json))
}

translateBtn.addEventListener("click",handleBtnClick)
