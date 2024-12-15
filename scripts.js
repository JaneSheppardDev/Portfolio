const burger = document.getElementsByClassName("nav__burger")[0];

burger.addEventListener("click",()=>{
    const nav = document.getElementsByClassName("nav__wrap")[0];

    nav.classList.toggle("hide");
    nav.classList.contains("hide")?(burger.textContent = "menu"):(burger.textContent = "close");
});