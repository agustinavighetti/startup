'use: strict'

function display() {
    let xhttp;
    let obj_json;
    let joke;
    let newp;
    let cont;
    let oldp;

    xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            obj_json = JSON.parse(this.responseText);
            joke = obj_json.value.joke;
            newp = document.createElement('p');
            cont = document.createTextNode(obj_json.value.joke);
            newp.appendChild(cont);
            newp.id = 'oldp';
            oldp = document.getElementById('oldp');

            document.getElementById('box').replaceChild(newp, oldp);
        }
    };

    xhttp.open('GET', "http://api.icndb.com/jokes/random", true);

    xhttp.send();
}