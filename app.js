var translateBtn= document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")

function handleBtnClick(){
  console.log("clicked")
  console.log(txtInput.value);
}
translateBtn.addEventListener("click",handleBtnClick)
