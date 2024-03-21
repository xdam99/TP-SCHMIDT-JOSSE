console.log("LAURA SCHMIDT - DAMIEN JOSSE | 3WA DFS")

let header = document.querySelector('#header')
let logoHeader = document.querySelector('#logo')

window.addEventListener('scroll', ()=>{
    console.log(scrollY)
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

