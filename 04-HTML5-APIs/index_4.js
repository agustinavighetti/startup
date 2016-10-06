window.addEventListener('load', load, false);

function load () {
    init();
}

var wsUri = "ws://echo.websocket.org/";
var output;

function init() {
    output = document.getElementById('section--p');
    testWebSocket();
}

function testWebSocket() {
    websocket = new WebSocket(wsUri);

    websocket.onopen = function (e) {
        onOpen(e);
    };

    websocket.onclose = function (e) {
        onClose(e);
    };

    websocket.onmessage = function (e) {
        onMessage(e);
    };

    websocket.onerror = function (e) {
        onError(e);
    };
}

function onOpen(e) {
    writeToScreen("CONNECTED");
    doSend("Globant rocks");
}

function onClose(e) {
    writeToScreen("DISCONNECTED");
}

function onMessage(e) {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + e.data+'</span>');
    websocket.close();
}

function onError(e) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + e.data);
}

function doSend(message) {
    writeToScreen("SENT: " + message);
    websocket.send(message);
}

function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}