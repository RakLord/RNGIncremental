let topBar;
let mainWindow;
let tab;
let topBarCreated = 0;




$(document).ready(function() {
    topBar = $("#topBar");
    mainWindow = $("#mainWindow");
    tab = "home";
    updateDOM();
});