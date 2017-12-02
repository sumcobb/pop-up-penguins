/* Summer Turner
* CSCI 342: Web Scripting, Fall 2017
* Find the penguins game that uses the Javascript DOM to populate.
* The snow mounds and penguins are randomly chosen from penguin_pngs.
*/
"use strict";

$(document).ready(function() {

    // Add a background color to the page
    document.body.style.backgroundColor = "#ccf5f5";

    // Create gameholder:
    var gameholder = document.createElement("div");
    gameholder.id = "gameholder";
    gameholder.style.width = "600px";
    gameholder.style.marginLeft = "auto";
    gameholder.style.marginRight = "auto";
    document.body.appendChild(gameholder);

    // Create title:
    var title = document.createElement("div");
    title.id = "title";
    gameholder.append(title);
    title.style.width = "600px";
    title.style.height = "150px";
    title.style.backgroundImage = "url('penguin_pngs/penguin_title.png')";

    // Create dropdown:
    var dropdown = document.createElement("select");
    for (var j = 2; j <= 64; j++) {
        var option = document.createElement("option");
        option.value = j;
        option.text = String(j);
        dropdown.options.add(option);
    }
    gameholder.appendChild(dropdown);
    gameholder.append(document.createElement("div"));

    var number;
    var yetiPosition;

    /*
    * When the user selects a new number in the dropdown, a new game is loaded.
    */
    dropdown.onchange = function () {

        // Remove the div elements from the previous game:
        for (var i = 1; i <= number; i++) {
            if (i != yetiPosition) {
                (function () {
                    var p = document.getElementById("penguin"+i);
                    $(p).remove();
                }());
            }
        }
        $("#yeti").remove();

        number = this.value;
        yetiPosition = Math.floor(Math.random() * number) + 1;

        /*
        * Loop to populate the page with penguins instead of hard coding in HTML.
        */
        for (var i = 1; i <= number; i++) {
            if (i != yetiPosition) {
                // Penguin div is created with apporpriate styling and behaviors.
                (function () {
                    var penguin = document.createElement("div");
                    penguin.class = "penguin" + i;
                    penguin.id = "penguin" + i;
                    penguin.style.width = "200px";
                    penguin.style.height = "200px";
                    penguin.style.float = "left";

                    if (i < 9) {
                        $(penguin).css("background-image",
                                       "url('penguin_pngs/mound_" + i + ".png')");
                    } else {
                        var r = j % 8 + 1;
                        $(penguin).css("background-image",
                                       "url('penguin_pngs/mound_" + r + ".png')");
                    }

                    penguin.onmouseover =  function () {
                        $(penguin).css("background-image",
                                       "url('penguin_pngs/mound_1_hover.png')");
                        $(penguin).css("cursor", "pointer");
                    };

                    penguin.onmouseout =  function () {
                        $(penguin).css("background-image",
                                       "url('penguin_pngs/mound_1.png')");
                    };

                    penguin.onclick = function () {
                        penguin.onmouseover = null;
                        penguin.onmouseout = null;
                        var random = Math.floor(Math.random() * 8) + 1;
                        $(penguin).css("background-image",
                                       "url('penguin_pngs/penguin_" +
                                       random + ".png')");
                        penguin.onclick = null;
                    }

                    gameholder.append(penguin);
                }());
            } else {
                // Yeti div is created with apporpriate styling and behaviors.
                var yeti = document.createElement("div");
                yeti.id = "yeti";
                yeti.style.width = "200px";
                yeti.style.height = "200px";
                yeti.style.float = "left";

                var random = Math.floor(Math.random() * 8) + 1;
                yeti.style.backgroundImage = "url('penguin_pngs/mound_" +
                                             random + ".png')";

                yeti.onmouseover =  function () {
                    $(yeti).css("background-image",
                                "url('penguin_pngs/mound_9_hover.png')");
                    $(yeti).css("cursor", "pointer");
                };

                yeti.onmouseout =  function () {
                    $(yeti).css("background-image",
                                "url('penguin_pngs/mound_9.png')");
                };

                yeti.onclick = function () {
                    yeti.onmouseover = null;
                    yeti.onmouseout = null;

                    // Loop to make the penguins disapear when yeti is awoken.
                    for (var j = 1; j <= number; j++) {
                        if (j != yetiPosition) {
                            (function () {
                                var p = document.getElementById("penguin" + j);

                                if (j < 9) {
                                    $(p).css("background-image",
                                             "url('penguin_pngs/mound_" +
                                             j + ".png')");
                                } else {
                                    var r = j % 8 + 1;
                                    $(p).css("background-image",
                                             "url('penguin_pngs/mound_" +
                                             r + ".png')");
                                }

                                $(p).each(function() {
                                    this.onmouseover = null;
                                    this.onmouseout = null;
                                    this.onclick = null;
                                });
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
