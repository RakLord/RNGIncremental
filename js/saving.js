
function newGame() {
    game = new Game();
};

function saveGame() {
    localStorage.setItem("rngIncrementalSave", getSaveString());
    console.log("Saved");
};

function getSaveString() {
    let save = getMinimalGameObj();
    return btoa(JSON.stringify(save));
}

function getMinimalGameObj() {
    let ret = {
        version: game.version,
        lastUpdate: game.lastUpdate,
        upgradesBought: game.upgradesBought,
        prestige: game.prestige,
        coinState: game.coinState,
    };

    return ret;
}

function loadGame(save) {
    save = save || localStorage.getItem("rngIncrementalSave");
    save = atob(save);
    if (typeof save == "string") {
        console.log("ADD SAVE STRING LOADING LOGIC ZZZZZZZZZZZZZ");
    }
    save = JSON.parse(save);
    console.log(save);
    game = new Game();
    if (save.version == game.version) {
        let temp = ["lastUpdate", "upgradesBought"];
        temp.forEach(function (name) {
            if (name in save) game[name] = save[name];
        });
    }

    // Load setup stuff

    
} 