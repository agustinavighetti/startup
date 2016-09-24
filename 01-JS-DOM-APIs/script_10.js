'use: strict'

function display() {
    const url = 'https://api.github.com/search/repositories';
    let xhttp;
    let parameter;
    let myPromise;
    let obj_json;
    let names;
    let newList;
    let newLi;
    let cont;
    let oldList;
    let num;
    let newNumber;
    let newName;
    let oldName;
    let oldNumber;
    let cont2;

    parameter = document.getElementById('box--input').value;

    if (parameter.length == 0) {
    alert('You must write a name to search up.');
    return;
    }

    myPromise = new Promise(function (resolve, reject) {
        xhttp = new XMLHttpRequest();
        
        xhttp.open("GET", url+'?q='+parameter, true);

        xhttp.onload = function() {
            obj_json = JSON.parse(xhttp.responseText);
            names = obj_json.items;
            newList = document.createElement('ul');

            if (obj_json.items.length != 0) {

                for (var i = 0; i < obj_json.items.length; i++) {
                    newLi = document.createElement('li');
                    cont = document.createTextNode(obj_json.items[i].full_name);
                    newLi.appendChild(cont);
                    newList.appendChild(newLi);
                    newList.id= 'oldList';
                    oldList = document.getElementById('oldList');

                    document.getElementById('list').replaceChild(newList, oldList);
                };
            } else {
                newLi = document.createElement('p');
                cont = document.createTextNode('NO RESULTS');
                newLi.appendChild(cont);
                newList.appendChild(newLi);
                newList.id= 'oldList';
                oldList = document.getElementById('oldList');

                document.getElementById('list').replaceChild(newList, oldList);
            }

            document.getElementById('box--desc_hid').setAttribute('class','box--desc_show');

            newName = document.createElement('span');
            newNumber = document.createElement('span');
            cont2 = document.createTextNode(parameter);
            newName.appendChild(cont2);
            num = document.createTextNode(obj_json.items.length);
            newNumber.appendChild(num);
            newName.id = 'box--name';
            newNumber.id = 'box--number';
            oldName = document.getElementById('box--name');
            oldNumber = document.getElementById('box--number');

            document.getElementById('box--desc_hid').replaceChild(newName, oldName);
            document.getElementById('box--desc_hid').replaceChild(newNumber, oldNumber);
            
            resolve(console.log(parameter,obj_json.items.length));
        };

        xhttp.onerror = function() {
            reject(alert('Something went wrong.'));
        };

        xhttp.send();
    });
}