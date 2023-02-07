
function newGame() {
    game = new Game();
};

function saveGame() {
    localStorage.setItem("rngIncrementalSave", getFinalSaveString());
    console.log("Saved");
};

function getFinalSaveString() {
    return btoa(getSaveString());
}

function getSaveString() {
    let save = getMinimalGameObj();
    return JSON.stringify(save);
}

function getMinimalGameObj() {
    let ret = {
        version: game.version,
        lastUpdate: game.lastUpdate,
        upgradesBought: game.upgradesBought,
        prestige: game.prestige,
        coinState: game.coinState,
    };
    console.log(ret);
    return ret;
}

function loadGame() {
    save = localStorage.getItem("rngIncrementalSave");
    console.log(save);
    save = atob(save);
    console.log(save);

    save = JSON.parse(save);
    console.log(save);
    game = new Game();
    if (save.version == game.version) {
        let temp = ["lastUpdate", "upgradesBought", "coinState"];
        temp.forEach(function (name) {
            if (name in save) game[name] = save[name];
        });
    }
    console.log("Loaded");
    // Load setup stuff
} 