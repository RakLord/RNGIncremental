function setupTopBar() {
    function addToTopBar(text, id, eventName, eventFunction, eventParams) {
        let newTopBarItem;
        newTopBarItem = $("<div></div>").text(text);
        newTopBarItem.addClass("d-inline-flex h4 pb-2 mb-4 text-danger border-bottom border-danger pe-click");
        if (id != "none") {
            newTopBarItem.addClass("clickable");
        }
        newTopBarItem.attr("id", id);

        if (eventName) {
            newTopBarItem.on(eventName,{tabName: eventParams}, eventFunction);
        }
        topBar.append(newTopBarItem);
    }

    // Top bar creation
    addToTopBar("RNG Incremental", "none");
    addToTopBar("Home", "buttonHome", "click", switchTab, "home");
    addToTopBar("Coinflip", "buttonCoinflip", "click", switchTab, "coinflip");

    // Top bar save/load
    addToTopBar("Save", "buttonSave", "click", saveGame);
    addToTopBar("Load", "buttonLoad", "click", loadGame);

    topBarCreated = 1;
}

function updateDOM() {
    if (topBarCreated == 0) {
        console.log("Top bar setting up")
        setupTopBar();
    }

    mainWindow.empty();

    // createText used for adding template text to main window mostly used bellow.
    function createText(text) {
        let newElement;
        newElement = $("<div></div>");
        newElement.text(text);
        newElement.addClass("col h4 pb-2 mb-4 pe-click ");
        return newElement
    }

    // tab setup
    switch(tab) {
        case "home" :
            mainWindow.append(createText("Money: 0").attr("id", "moneyDisplay"))
            mainWindow.append(createText("Money/s: 0").attr("id", "moneyDisplay1"))
            mainWindow.append(createText("Money/h: 0").attr("id", "moneyDisplay2"))
            mainWindow.append(createText("Money/d: 0").attr("id", "moneyDisplay3"))
            
            // mainWindow.append(createText("Info Other"))
            // mainWindow.append(createText("Info Other"))
            // mainWindow.append(createText("Info Other"))
            // mainWindow.append(createText("Info Other"))
            break;

        case "coinflip" :

            mainWindow.append(createText("Money: 0").attr("id", "moneyDisplay"))
            break;
        }

    }
