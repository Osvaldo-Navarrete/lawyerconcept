function scrollUp() {
    const scrollup = document.getElementById("scroll-up")
    if (this.scrollY >= 460) scrollup.classList.add("show-scroll"); else scrollup.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)



//SCROLL REVEAL 
const sr = ScrollReveal({
    origin: "top",
    distance: '40px',
    duration: 1000,
    delay: 200
})
sr.reveal(`.materia__container, .item__ubi`)


const sections = document.querySelectorAll("section[id]")
function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id")
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__list a[href*=" + sectionId + "]").classList.add("active-link")
        }else{
            document.querySelector(".nav__list a[href*=" + sectionId + "]").classList.remove("active-link")
        }
    })

}
window.addEventListener("scroll",scrollActive)


const date = new Date(); 
document.getElementById('fecha-copy').innerHTML = date.getFullYear();