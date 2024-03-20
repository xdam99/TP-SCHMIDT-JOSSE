let submit = document.querySelector(".submit");
let comment = document.querySelector(".comment");

submit.addEventListener("click", () => {
    console.log("hello world");
    if (comment.value === "") {
        console.log("T'as oublié quelque chose");
    }
});

