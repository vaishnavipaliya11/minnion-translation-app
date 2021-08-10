var translateBtn= document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var output= document.querySelector(".output")

function handleBtnClick(){
  console.log("clicked")
  console.log(txtInput.value);
  output.innerText= "hello"
}
translateBtn.addEventListener("click",handleBtnClick)
