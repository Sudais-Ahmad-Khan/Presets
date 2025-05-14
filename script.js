let cards = document.querySelectorAll(".card");
let newBody = document.querySelector(".newbody");
let btn = document.querySelector("#getLink");
let time = document.querySelector(".timer");
const link = localStorage.getItem("selectedLink")
cards.forEach(function(card){
    card.addEventListener("click", function(){
        const link = card.getAttribute("data-link");
        localStorage.setItem("selectedLink", link);
        newBody.classList.remove("hidden");


    let timeLeft = 30;
    const countdown = setInterval(() => {
    timeLeft--;
    
    if(timeLeft <= 0){
        time.textContent = `0s`
    } else {
        time.textContent = `${timeLeft}s`;
    }
    }, 1000);
setTimeout(() => {
    btn.style.opacity = "1";
    btn.href = link;
}, 30000);
    });
});

btn.addEventListener("click", function(){
    setTimeout(() => {
        newBody.classList.add("hidden");
    }, 2000);
})
