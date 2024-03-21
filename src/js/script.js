console.log("LAURA SCHMIDT - DAMIEN JOSSE | 3WA DFS")

let header = document.querySelector('#header')
let logoHeader = document.querySelector('#logo')

window.addEventListener('scroll', ()=>{
    if(scrollY>=600){
        header.style.height = "75px"
        logoHeader.style.width = "75px"
        logoHeader.style.height = "50px"
    } else {
        header.style.height = "100px"
        logoHeader.style.width = "100px"
        logoHeader.style.height = "75px"
    }
})

let imgAvantages = document.querySelector('#img-avantages')

let images = ["piste1.jpg","piste2.jpg","piste3.jpg"]

let i = 0

function changerImage() {
    imgAvantages.src = "./src/img/"+images[i]
    i = (i+1) % images.length
}
setInterval(changerImage, 2000)