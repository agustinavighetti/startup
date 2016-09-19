'use: strict'

    function display(method) {
                var xhttp, url;
                let myPromise;
                url = 'http://api.icndb.com/jokes/random';
                myPromise = new Promise(function (resolve, reject) {     
                    xhttp = new XMLHttpRequest();
                
                    xhttp.open(method, url, true);

                    xhttp.onload = function() {
                        let obj_json, joke, newp, cont, oldp;
                        obj_json = JSON.parse(this.responseText);
                        joke = obj_json.value.joke;
                        newp = document.createElement("p");
                        cont = document.createTextNode(obj_json.value.joke);
                        newp.appendChild(cont);
                        newp.setAttribute("id","oldp");
                        oldp = document.getElementById("oldp");
                        document.getElementById("box").replaceChild(newp, oldp);
                        resolve(alert('Here comes the joke!!'));
                    };

                    xhttp.onerror = function() {
                        let msj, newp, oldp;
                        document.getElementById("box").setAttribute("class", "center--text center--text_error");
                        msj = document.createTextNode("TRY AGAIN LATER!");
                        newp = document.createElement("p");
                        newp.appendChild(msj);
                        newp.setAttribute("id","oldp");
                        oldp = document.getElementById("oldp");
                        document.getElementById("box").replaceChild(newp, oldp);

                        reject(alert('Ups! Something went wrong :('));                
                    };
                    xhttp.send();
                    
                });
            }