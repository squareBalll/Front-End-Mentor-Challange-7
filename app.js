

// selections 

const footer = document.querySelector(".footer")
const resimBtn = document.querySelector(".button-resim")

// Events 

resimBtn.addEventListener("click",slideIn)


// Functions 


function slideIn() {
    footer.classList.toggle("footer-active");
}


