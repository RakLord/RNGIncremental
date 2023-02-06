
class Game {
    constructor(data) {
        this.version = "0.0.1";
        this.lastUpdate = data ? data.lastUpdate || new Date().getTime() : new Date().getTime();

        this.tab = 0;
        
        this.prestige = {};
        this.upgradesBought = [];
        
        this.upgrades = {};

        if (data && data.prestige) {
            for (let i in data.prestige) {
                this.prestige[i] = data.prestige[i];
            }
        }
    }
}