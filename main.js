const list = document.querySelector(".list")

const listToggle = document.querySelector(".listToggle")

listToggle.addEventListener("click",()=>{

    list.classList.toggle("active")
})