
const shareBtn = document.getElementById("share-icon-container");
const triangle = document.getElementById("triangle");


shareBtn.onclick = function() {
    triangle.style.display= "block";
    document.getElementById("social-media").style.display= "flex";
    document.getElementById("share-word").style.display = "block";
    document.getElementById("facebook").style.display = "block";
    document.getElementById("twitter").style.display = "block";
    document.getElementById("pinterest").style.display = "block";
    document.getElementById("share-icon").style.fill = "white";
    shareBtn.style.backgroundColor = "hsl(217, 19%, 35%)";
}