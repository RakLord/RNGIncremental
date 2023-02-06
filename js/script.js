let topBar;

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




};


$(document).ready(function() {
    topBar = $("#topBar");
    updateDOM();
});