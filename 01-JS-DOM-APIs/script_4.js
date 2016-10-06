'use: strict'

function FadeIn() {
    var pText;
    var newp;
    var existingp;
    var father;
    var newSon;
    
    pText = document.createTextNode('Hello world');
    newp = document.createElement('p');
    newp.appendChild(pText);
    newp.id = 'hid';
    existingp = document.getElementById('hid');
    father = existingp.parentNode;
    newSon = father.replaceChild(newp, existingp);
}