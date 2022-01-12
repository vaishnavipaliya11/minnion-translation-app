const translateBtn= document.querySelector("#btn-translate")
const txtInput = document.querySelector("#txt-input")
const output= document.querySelector(".output")

const serverUrl= "https://api.funtranslations.com/translate/minion.json"

const getServerUrl=(text)=> serverUrl +"?"+"text="+text

// const handelError=(error)=>alert("something went wrong with the server");

const handleBtnClick=(userInput)=>{
var userInput= txtInput.value;

fetch(getServerUrl(userInput))
.then(response => response.json())
.then(json => {
  var translatedText= json.contents.translated;
  output.innerText= translatedText;
})
.catch(handelError)
}

function handelError(error){
  alert("something went wrogn")
}

translateBtn.addEventListener("click",handleBtnClick)
