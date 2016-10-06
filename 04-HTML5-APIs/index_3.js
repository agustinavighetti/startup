let indexedDB = window.indexedDB || window.mozIndexedDEb || window.webkitIndexedDB || window.msIndexedDB;
let dataBase = null;

window.addEventListener('load', load, false);
function load () {
    window.onload = startDB();
    document.getElementById('section--textarea').addEventListener('dragover', highlight);
    document.getElementById('section--textarea').addEventListener('drop', dropText);
    document.getElementById('section--textarea').addEventListener('dragleave', unhighlight);
}

function saveText () {
    saveTextLS();
    saveTextDB();
}

function saveTextLS () {
    let textarea;
    let number;
    
    textarea = document.getElementById('section--textarea').value;

    if (localStorage.number) {
        number = localStorage.getItem('number');
    } else {
        number = 1;
    }

    if (localStorage.text) {
        number++;
        localStorage.setItem(`text${number}`, `${textarea}`);
        localStorage.setItem('number', `${number}`);
        console.log(localStorage.length);
    } else {
        localStorage.setItem('text', `${textarea}`);
        localStorage.setItem('number', `${number}`);
        console.log(localStorage.length);
    }
}

function startDB () {
    dataBase = indexedDB.open('object', 1);

    dataBase.onupgradeneeded = function (e) { 
        let active;
        let object;

        active = dataBase.result;
        object = active.createObjectStore('textarea', { keyPath: 'id', autoIncrement: true });
        object.createIndex('by_text', 'text', { unique: false });
    };

    dataBase.onsuccess = function (e) {
        let db;

        alert('Database loaded');
        db = e.target.result;
        db.onversionchange = function(e) {
        e.target.close();
        }
    };

    dataBase.onerror = function (e) {
        alert('Error loading Database');
    };
}

function saveTextDB () {
    let active;
    let data;
    let object;
    let request;

    active = dataBase.result;
    data = active.transaction(['textarea'],'readwrite');
    object = data.objectStore('textarea');
    request = object.put({
        text: document.querySelector('#section--textarea').value
    });

    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };

    data.oncomplete = function (e) {
        document.querySelector('#section--textarea').value ='';
        alert('Object successfully added');
    };
}

function clearAll () {
    clearLS();
    clearDB();
}

function clearLS () {
    localStorage.clear();
    alert('Local Storage clear!');
}

function clearDB () {
    var DBDeleteRequest;
    DBDeleteRequest = window.indexedDB.deleteDatabase('object');

    DBDeleteRequest.onerror = function(event) {
      console.log("Error deleting database.");
    };
     
    DBDeleteRequest.onsuccess = function(event) {
      alert("Database deleted successfully");
        
      console.log(DBDeleteRequest.result); // should be null
    };

    DBDeleteRequest.onblocked = function () {
    console.log("Couldn't delete database due to the operation being blocked");
    };
}

function highlight (e) {
    e.stopPropagation();
    e.preventDefault();

    document.getElementById('section--textarea').setAttribute('class','section--textarea section--textarea_highlight');
}

function unhighlight (e) {
    e.stopPropagation();
    e.preventDefault

    document.getElementById('section--textarea').setAttribute('class','section--textarea section--textarea_unhighlight');
}

function dropText (e) {
    let text;
    let reader;

    document.getElementById('section--textarea').setAttribute('class','section--textarea section--textarea_unhighlight');

    e.stopPropagation();
    e.preventDefault();

    if (e.dataTransfer.files.length > 1) {
        alert('You can drop only one file');
        return;
    }

    if ((e.dataTransfer.files[0].type != 'text/plain') && (e.dataTransfer.files[0].type != 'text/html') && (e.dataTransfer.files[0].type != 'text/css')) {
        alert(`The file's type must be "text"`);
        return;
    }

    text = e.dataTransfer.files;
    reader = new FileReader();
    reader.readAsText(text[0]);

    reader.onload = function (e) {
        document.getElementById('section--textarea').value = e.target.result;
    }

    reader.onerror = function (e) {
        alert('Error reading the file');
    }
}