'use: strict'

        function display() {
            var xhttp = new XMLHttpRequest();
            
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let obj_json, joke, newp, cont, oldp;
                obj_json = JSON.parse(this.responseText);
                joke = obj_json.value.joke;
                newp = document.createElement("p");
                cont = document.createTextNode(obj_json.value.joke);
                newp.appendChild(cont);
                newp.setAttribute("id","oldp");
                oldp = document.getElementById("oldp");
                document.getElementById("box").replaceChild(newp, oldp);
            }
            };

            xhttp.open("GET", "http://api.icndb.com/jokes/random", true);

            xhttp.send();
        }
