var stat = document.querySelector("h5");
var add = document.querySelector("#btnn");
var rem =document.querySelector("#remove");

add.addEventListener("click", function(){
    stat.innerHTML = "Friends"
    stat.style.color = "green"
})

rem.addEventListener("click", function(){
    stat.innerHTML = "Stranger"
    stat.style.color = "red"
})