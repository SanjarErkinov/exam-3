const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const closeBtn = document.querySelector(".modal-close-btn")
const openModal = document.querySelector(".main-section__btn");

openModal.addEventListener("click", function () {
    modal.style.display = "flex";
    body.style.overflow = "hidden";
});

window.addEventListener("click", function (e) {
    if (e.target == modal){
        modal.style.display = "none";
        body.style.overflow = "scroll";
    }
});

window.addEventListener("keydown", function(e){
    if (e.keyCode === 27) {
        modal.style.display = "none";
        body.style.overflow = "scroll";
    }
});

closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
    body.style.overflow = "scroll";
});



const form = document.querySelector(".modal__content");
const submitBtn = document.querySelector(".modal__btn");
const textarea = document.querySelector("modal__textarea")

const createUserAdditionalInfo = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const textarea = e.target[2].value;


    const addiitionalInfo = {
        name,
        email,
        textarea,
    }
    console.log(addiitionalInfo);
};


form.addEventListener("submit", function(e){
    createUserAdditionalInfo(e)
})
