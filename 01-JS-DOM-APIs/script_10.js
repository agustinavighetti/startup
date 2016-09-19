'use: strict'

        function display() {
            var xhttp, url, parameter;
            let myPromise;
            parameter = document.getElementById("input").value;
                        if (parameter.length == 0) {
                        alert('You must write a name to search up.');
                        return;
                        }
            url = 'https://api.github.com/search/repositories';
            myPromise = new Promise(function (resolve, reject) {
                xhttp = new XMLHttpRequest();
                
                xhttp.open("GET", url+'?q='+parameter, true);

                xhttp.onload = function() {
                    var obj_json, names, newList, newLi, cont, oldList, num, newNumber;
                    var newName, oldName, oldNumber, cont2;
                    obj_json = JSON.parse(xhttp.responseText);
                    names = obj_json.items;
                    newList = document.createElement("ul");
                    if (obj_json.items.length != 0) {
                        for (var i = 0; i < obj_json.items.length; i++) {
                            newLi = document.createElement("li");
                            cont = document.createTextNode(obj_json.items[i].full_name);
                            newLi.appendChild(cont);
                            newList.appendChild(newLi);
                            newList.setAttribute("id","oldList");
                            oldList = document.getElementById("oldList");
                            document.getElementById("list").replaceChild(newList, oldList);
                        };
                    } else {
                        newLi = document.createElement("p");
                        cont = document.createTextNode('NO RESULTS');
                            newLi.appendChild(cont);
                            newList.appendChild(newLi);
                            newList.setAttribute("id","oldList");
                            oldList = document.getElementById("oldList");
                            document.getElementById("list").replaceChild(newList, oldList);
                    }
                    document.getElementById("desc_hid").setAttribute("class","desc_show");
                    newName = document.createElement("span");
                    newNumber = document.createElement("span");
                    cont2 = document.createTextNode(parameter);
                    newName.appendChild(cont2);
                    num = document.createTextNode(obj_json.items.length);
                    newNumber.appendChild(num);
                    newName.setAttribute("id", "name");
                    newNumber.setAttribute("id", "number");
                    oldName = document.getElementById("name");
                    oldNumber = document.getElementById("number");
                    document.getElementById("desc_hid").replaceChild(newName, oldName);
                    document.getElementById("desc_hid").replaceChild(newNumber, oldNumber);
                    
                    resolve(console.log(parameter,obj_json.items.length));
                };

                xhttp.onerror = function() {
                    reject(alert('Something went wrong.'));
                };
                xhttp.send();

            });
        } 