
const redColor = document.querySelector(".red")
const blackColor = document.querySelector(".black")
const grayColor = document.querySelector(".gray")
const cartButton = document.getElementById("button")
const itemTag = document.querySelector(".tag")
const imgCard =document.querySelector(".product-image")

document.addEventListener('DOMContentLoaded', () => {
redColor.addEventListener("click", () => {
    imgCard.style.backgroundImage = 'url("../../public/img/redcar.jpg")';
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";

})

blackColor.addEventListener("click", () => {
    imgCard.style.backgroundImage = 'url("../../public/img/blackcar.jpg")';
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
   

})


grayColor.addEventListener("click", () => {
    imgCard.style.backgroundImage = 'url("../../public/img/graycar.jpg")';
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";

})


});
