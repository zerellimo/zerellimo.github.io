
const moon = document.getElementById("moon");

moon.onclick = function() {
    document.body.style.backgroundColor = "rgb(33,33,36)";
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "inline-block";
    document.body.style.color = "snow";
    document.getElementsByClassName("title")[0].style.color = "snow";
    document.getElementsByClassName("dm-button")[0].style.color = "black";
    document.getElementsByClassName("dm-button")[0].style.backgroundColor = "snow";
}

const sun = document.getElementById("sun");

sun.onclick = function() {
    document.body.style.backgroundColor = "snow";
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "inline-block";
    document.body.style.color = "black";
    document.getElementsByClassName("title")[0].style.color = "black";
    document.getElementsByClassName("dm-button")[0].style.color = "snow";
    document.getElementsByClassName("dm-button")[0].style.backgroundColor = "black";
}