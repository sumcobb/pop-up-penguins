/* Summer Turner
* CSCI 342: Web Scripting, Fall 2017
*/
"use strict";

$(document).ready(function() {

    document.body.style.backgroundColor = "#ccf5f5";

    var numPenguins = 0;
    var dropdown = document.createElement("select");
    for(var j = 2; j <= 64; j++) {
        var option = document.createElement("option");
        option.value = j;
        option.text = String(j);
        dropdown.options.add(option);
    }
    document.body.appendChild(dropdown);

    $(dropdown).on("change", function() {
        numPenguins = this.value;
        console.log(numPenguins);
    });

    var gameholder = document.createElement("div");
    document.body.appendChild(gameholder);
    var title = document.createElement("div");
    var yeti = document.createElement("div");
    gameholder.append(title);
    gameholder.append(yeti);

    for (var i = 1; i < 25; i++) {
        (function () {

            var penguin = document.createElement("div");
            penguin.class = "penguin" + i;
            penguin.style.width = "200px";
            penguin.style.height = "200px";
            penguin.style.float = "left";

            if (i < 9) {
                penguin.style.backgroundImage = "url('penguin_pngs/mound_"+i+".png')";
            } else {
                penguin.style.backgroundImage = "url('penguin_pngs/mound_"+(i%8+1)+".png')";
            }

            penguin.onmouseover =  function () {
                $(penguin).css("background-image", "url('penguin_pngs/mound_1_hover.png')");
                $(penguin).css("cursor", "pointer");

            };

            penguin.onmouseout =  function () {
                $(penguin).css("background-image", "url('penguin_pngs/mound_1.png')");

            };

            penguin.onclick = function () {
                penguin.onmouseover = null;
                penguin.onmouseout = null;

                var random = Math.floor(Math.random() * 8) + 1;
                $(penguin).css("background-image", "url('penguin_pngs/penguin_" + random + ".png')");
            }

            gameholder.append(penguin);
        }());
    }



    $(".yeti").mousedown(function() {
        alert("Yaaaarrrr!");
    });




});
