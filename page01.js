var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function() {

    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");

};


var myIndex = 0;
letRoll();

function letRoll() {
    var i;
    var x = document.getElementsByClassName('Slides');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = 'block';
    setInterval(letRoll, 4000);
}