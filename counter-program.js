const num = document.getElementById("num");
const decreasebtn = document.getElementById("decrease-button");
const resetbtn = document.getElementById("reset-button");
const increasebtn = document.getElementById("increase-button");
let count = 0;

decreasebtn.onclick = function(){
    count -= 1;
    num.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    num.textContent = count;
}
increasebtn.onclick = function(){
    count += 1;
    num.textContent = count;
}