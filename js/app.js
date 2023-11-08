const input = document.querySelectorAll(".form__radio")
const btn = document.querySelector(".form__submit")
const h1 = document.querySelector("h1")
const p = document.querySelector(".main__paragraph")
const imgContainer = document.querySelector(".img__container")
const img = document.querySelector(".main__image")

let option = 0


for(let i=0; i<input.length; i++){
    input[i].addEventListener("input", (e) => {
        // option = parseInt(e.target.defaultValue)
        option = e.target.defaultValue
        console.log(option)
    })
}

btn.addEventListener("click", (e) => {
    h1.style.textAlign = "center"
    p.style.textAlign = "center"

    document.querySelector("form").classList.add("hidden")
    imgContainer.style.display = "flex"
    imgContainer.style.width = "100%"
    imgContainer.style.justifyContent = "center"
    imgContainer.style.alignItems = "center"
    imgContainer.style.height ="fit-content"
    imgContainer.style.backgroundColor = "unset"

    img.setAttribute("src", "../images/illustration-thank-you.svg")
    img.style.objectFit = "cover"

    if(option == 0){
        h1.innerText = "You didn't select nothing!."
        p.textContent = "If you want to give us a rating, please come back and select one!"
    } else {

        h1.innerText = "Thank You"
        p.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch."

        const divText = document.createElement("div")
        divText.classList.add("main__rating")
        divText.append(document.createElement("p"))
        divText.children[0].textContent = `You selected ${option} out of 5`
        h1.before(divText)
    }
})
