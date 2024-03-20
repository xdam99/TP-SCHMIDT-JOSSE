console.log("LAURA SCHMIDT - DAMIEN JOSSE | 3WA DFS")

let header = document.querySelector('#header')

window.addEventListener('scroll', ()=>{
    console.log(scrollY)
    if(scrollY>=100){
        header.style.position = "fixed"
    } else {
        header.style.position = "relative"
    }
})