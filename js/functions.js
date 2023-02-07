function switchTab({ data : {tabName}}) {
    console.log("Tab", tabName);
    tab = tabName;
    updateDOM();
}

function flipCoin(){
    let currentCoinState = game.coinState;
    let newCoinState = Math.round(Math.random());
    console.log("Old: ", currentCoinState, " | New: ", newCoinState);
    let coinImg = $("#coinImg");
    console.log(newCoinState);
    game.coinState = newCoinState;
    switch (newCoinState) {
        case 0: 
            coinImg.attr("src", "/assets/coinHeads.png");
            break;
        case 1: 
            coinImg.attr("src", "/assets/coinTails.png");
            break;
    } 
}