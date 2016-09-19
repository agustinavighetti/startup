'use: strict'

    function FadeIn() {
        var pText = document.createTextNode("Hello world");
        var newp = document.createElement("p");
        newp.appendChild(pText);
        newp.id = 'hid';
        var existingp = document.getElementById("hid");
        var father = existingp.parentNode;
        var newSon = father.replaceChild(newp, existingp);
    }
