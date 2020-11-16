const paragraph = document.querySelector("#para")
const btn = document.querySelector("#button")

const changeBgColor = () => {
  if(paragraph.className === "redBg"){
      paragraph.className = 'blueBg'
    }
  else{
    paragraph.className = 'redBg'
  }
}

const init = () => {
  btn.addEventListener('click', changeBgColor)
}

window.addEventListener('load', init);
