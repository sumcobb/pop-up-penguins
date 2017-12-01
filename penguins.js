/* Summer Turner
* CSCI 342: Web Scripting, Fall 2017
*/
"use strict";

$(document).ready(function() {

    document.body.style.backgroundColor = "#ccf5f5";

    var numPenguins;
    var yetiPosition;
    var dropdown = document.createElement("select");
    for(var j = 2; j <= 64; j++) {
        var option = document.createElement("option");
        option.value = j;
        option.text = String(j);
        dropdown.options.add(option);
    }

    //var gameholder = document.createElement("div");
    //document.body.appendChild(gameholder);
    var gameholder = document.getElementById("gameholder");
    document.body.appendChild(dropdown);

    //var title = document.createElement("div");
    //gameholder.append(title);
    var title = document.getElementById("title");
    var yeti = document.createElement("div");

    gameholder.append(yeti);

    dropdown.onchange = function () {

        for (var i = 1; i <= numPenguins; i++) {
            if (i != yetiPosition) {
                (function () {
                    var p = document.getElementById("penguin"+i);
                    $(p).remove();
                }());
            }
        }

        $("#yeti").remove();

        numPenguins = this.value;
        console.log("numPeguins " + numPenguins);

        yetiPosition = Math.floor(Math.random() * numPenguins) + 1;
        console.log("yeti position: "+yetiPosition);

        for (var i = 1; i <= numPenguins; i++) {

            if (i != yetiPosition) {
                (function () {

                    var penguin = document.createElement("div");
                    penguin.class = "penguin" + i;
                    penguin.id = "penguin" + i;
                    penguin.style.width = "200px";
                    penguin.style.height = "200px";
                    penguin.style.float = "left";

                    if (i < 9) {
                        $(penguin).css("background-image", "url('penguin_pngs/mound_"+i+".png')");
                    } else {
                        $(penguin).css("background-image", "url('penguin_pngs/mound_"+(i%8+1)+".png')");
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
                        penguin.onclick = null;
                    }

                    gameholder.append(penguin);
                }());
            } else {

                var yeti = document.createElement("div");
                yeti.id = "yeti";
                yeti.style.width = "200px";
                yeti.style.height = "200px";
                yeti.style.float = "left";
                yeti.style.backgroundImage = "url('penguin_pngs/mound_9.png')";

                yeti.onmouseover =  function () {
                    $(yeti).css("background-image", "url('penguin_pngs/mound_9_hover.png')");
                    $(yeti).css("cursor", "pointer");

                };

                yeti.onmouseout =  function () {
                    $(yeti).css("background-image", "url('penguin_pngs/mound_9.png')");

                };

                yeti.onclick = function () {
                    //alert("Yaaaarrrr!");

                    yeti.onmouseover = null;
                    yeti.onmouseout = null;

                    for (var i = 1; i <= numPenguins; i++) {

                        if (j != yetiPosition) {
                            (function () {
                                var p = document.getElementById("penguin"+i);

                                if (j < 9) {
                                    $(p).css("background-image", "url('penguin_pngs/mound_"+j+".png')");
                                } else {
                                    $(p).css("background-image", "url('penguin_pngs/mound_"+(j%8+1)+".png')");
                                }
                            }());
                        }
                    }
                    $(yeti).css("background-image", "url('penguin_pngs/yeti.png')");
                }

                gameholder.append(yeti);
            }
        }
    };

});
