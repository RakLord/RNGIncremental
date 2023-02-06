let topBar;
let mainWindow;
let tab;

function updateDOM() {
    function addToTopBar(text, id, eventName, eventFunction) {
        let newTopBarItem;
        newTopBarItem = $("<div></div>").text(text);
        newTopBarItem.addClass("d-inline-flex h4 pb-2 mb-4 text-danger border-bottom border-danger pe-click");
        if (id != "none") {
            newTopBarItem.addClass("clickable");
        }
        newTopBarItem.attr("id", id);

        if (eventName) {
            newTopBarItem.on(eventName, eventFunction);
        }

        topBar.append(newTopBarItem);
    }

    newGame();
    
    addToTopBar("RNG Incremental", "none");
    addToTopBar("Home", "buttonHome");
    addToTopBar("Coinflip", "buttonCoinflip");

    addToTopBar("Save", "buttonSave", "click", saveGame);
    addToTopBar("Load", "buttonLoad", "click", loadGame);


    if (tab == "home") {
        function createText(text) {
            let newElement;
            newElement = $("<div></div>");
            newElement.text(text);
            newElement.addClass("col h4 pb-2 mb-4 pe-click");
            return newElement
        }


        mainWindow.append(createText("Money: 0").attr("id", "moneyDisplay"))
        mainWindow.append(createText("Money/s: 0").attr("id", "moneyDisplay1"))
        mainWindow.append(createText("Money/h: 0").attr("id", "moneyDisplay2"))
        mainWindow.append(createText("Money/d: 0").attr("id", "moneyDisplay3"))
        
        // mainWindow.append(createText("Info Other"))
        // mainWindow.append(createText("Info Other"))
        // mainWindow.append(createText("Info Other"))
        // mainWindow.append(createText("Info Other"))


    }


};


$(document).ready(function() {
    topBar = $("#topBar");
    mainWindow = $("#mainWindow");
    tab = "home";
    updateDOM();
});