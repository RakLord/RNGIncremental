let topBar;
let mainWindow;
let game;
let tab;
let topBarCreated = 0;

$(document).ready(function() {
    topBar = $("#topBar");
    mainWindow = $("#mainWindow");
    tab = "home";
    newGame();
    updateDOM();
});