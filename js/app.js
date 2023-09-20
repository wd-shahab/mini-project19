const $ = document;

const seeAllBtn = $.querySelector("#main-btn");
const newMessagesBox = $.querySelectorAll(".blueBG");
const newMessageIcon = $.querySelectorAll(".new");

seeAllBtn.addEventListener("click", e => {
  e.preventDefault()

  newMessagesBox.forEach(elem => {
    elem.classList.remove("blueBG")
  })
  newMessageIcon.forEach(elem => {
    elem.style.display = "none"
  })
  
})
