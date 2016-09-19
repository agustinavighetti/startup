'use: strict'

        function display() {
            var xhttp, url, parameter;
            let myPromise;
            parameter = "JavaScript";
            url = 'https://api.github.com/search/repositories';
            myPromise = new Promise(function (resolve, reject) {
                xhttp = new XMLHttpRequest();
                xhttp.open("GET", url+'?q='+parameter, true);
                xhttp.onload = function() {
                    var obj_json, names, newList, newLi, cont, oldList, newName, num, father, newNumber;
                    var father1, oldName, newName1, oldName1, oldNumber, cont2, cont3;
                    obj_json = JSON.parse(xhttp.responseText);
                    names = obj_json.items;
                    newList = document.createElement("ul");
                    for (var i = 0; i < obj_json.items.length; i++) {
                        newLi = document.createElement("li");
                        cont = document.createTextNode(obj_json.items[i].full_name);
                        newLi.appendChild(cont);
                        newList.appendChild(newLi);
                        newList.setAttribute("id","oldList");
                        oldList = document.getElementById("oldList");
                        document.getElementById("list").replaceChild(newList, oldList);
                    };
                    document.getElementById("desc_hid").setAttribute("class","desc_show");
                    newName = document.createElement("span");
                    newName1 = document.createElement("span");
                    newNumber = document.createElement("span");
                    cont2 = document.createTextNode(parameter);
                    cont3 = document.createTextNode(parameter);
                    newName.appendChild(cont2);
                    newName1.appendChild(cont3);
                    num = document.createTextNode(obj_json.items.length);
                    newNumber.appendChild(num);
                    oldName = document.getElementById("name");
                    oldName1 = document.getElementById("name1");
                    oldNumber = document.getElementById("number");
                    document.getElementById("fat1").replaceChild(newName, oldName);
                    document.getElementById("desc_hid").replaceChild(newName1, oldName1);
                    document.getElementById("desc_hid").replaceChild(newNumber, oldNumber);
                    
                    resolve(console.log(newName));
                };

                xhttp.onerror = function() {
                    reject(alert('Something went wrong.'));
                };
                xhttp.send();
            });
        } 