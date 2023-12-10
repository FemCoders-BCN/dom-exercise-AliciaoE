const redColor= function() {
    document.getElementsByTagName("h3")[0].style.backgroundColor = "red";
    document.getElementById("button").style.backgroundColor = "red";
    document.querySelector(".product-image").style.backgroundImage = 'url("../../public/img/redcar.jpg")';
}

const grayColor = function() {
    document.getElementsByTagName("h3")[0].style.backgroundColor = "gray";
    document.getElementById("button").style.backgroundColor = "gray";
    document.querySelector(".product-image").style.backgroundImage = 'url("../../public/img/graycar.jpg")';
}

const blackColor = function(){
    document.getElementsByTagName("h3")[0].style.backgroundColor = "black";
    document.getElementById("button").style.backgroundColor = "black";
    document.querySelector(".product-image").style.backgroundImage = 'url("../../public/img/blackcar.jpg")';
}

window.onload = function(){
    document.querySelector(".red").addEventListener("click", ()=>{
        redColor();
    });

    document.getElementsByClassName("gray")[0].addEventListener("click", ()=>{
        grayColor();
    });

    document.querySelector(".black").addEventListener("click", ()=>{
        blackColor();
    });
}

export{redColor, grayColor, blackColor};