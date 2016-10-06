'use: strict'

function display(method) {
    let xhttp;
    let myPromise;
    let obj_json;
    let joke
    let newp;
    let cont
    let oldp;
    const url = 'http://api.icndb.com/jokes/random';

    myPromise = new Promise(function (resolve, reject) {     
        xhttp = new XMLHttpRequest();
    
        xhttp.open(method, url, true);

        xhttp.onload = function() {

            obj_json = JSON.parse(this.responseText);
            joke = obj_json.value.joke;
            newp = document.createElement('p');
            cont = document.createTextNode(obj_json.value.joke);
            newp.appendChild(cont);
            newp.id = 'oldp';

            oldp = document.getElementById('oldp');

            document.getElementById('box').replaceChild(newp, oldp);

            resolve(alert('Here comes the joke!!'));
        };

        xhttp.onerror = function() {
            reject(alert('Ups! Something went wrong :('));                
        };
        
        xhttp.send();
    });
}