'use: strict'

function display() {
    const parameter = "JavaScript";
    const url = 'https://api.github.com/search/repositories';
    let xhttp;
    let myPromise;
    let obj_json;
    let names;
    let newList;
    let newLi;
    let cont;
    let oldList;
    let newName;
    let newBoxName;
    let newNumber;
    let cont2;
    let cont3;
    let num;
    let oldName;
    let oldBoxName;
    let oldNumber;

    myPromise = new Promise(function (resolve, reject) {
        xhttp = new XMLHttpRequest();

        xhttp.open("GET", url+'?q='+parameter, true);

        xhttp.onload = function() {
            obj_json = JSON.parse(xhttp.responseText);
            names = obj_json.items;
            newList = document.createElement('ul');

            for (var i = 0; i < obj_json.items.length; i++) {
                newLi = document.createElement('li');
                cont = document.createTextNode(obj_json.items[i].full_name);
                newLi.appendChild(cont);
                newList.appendChild(newLi);
                newList.id = 'oldList';
                oldList = document.getElementById('oldList');
                document.getElementById('list').replaceChild(newList, oldList);
            };

            document.getElementById('box--desc_hid').setAttribute('class','box--desc_show');

            newName = document.createElement('span');
            newBoxName = document.createElement('span');
            newNumber = document.createElement('span');
            cont2 = document.createTextNode(parameter);
            cont3 = document.createTextNode(parameter);
            newName.appendChild(cont2);
            newBoxName.appendChild(cont3);
            num = document.createTextNode(obj_json.items.length);
            newNumber.appendChild(num);
            oldName = document.getElementById('name');
            oldBoxName = document.getElementById('box--name');
            oldNumber = document.getElementById('box--number');
            newName.id = 'name';
            newBoxName.id = 'box--name';
            newNumber.id = 'box--number';

            document.getElementById('name-father').replaceChild(newName, oldName);
            document.getElementById('box--desc_hid').replaceChild(newBoxName, oldBoxName);
            document.getElementById('box--desc_hid').replaceChild(newNumber, oldNumber);
            
            resolve(console.log(newName));
        };

        xhttp.onerror = function() {
            reject(alert('Something went wrong.'));
        };

        xhttp.send();
    });
}