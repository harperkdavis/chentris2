const RANKS = [
    {
        elo: 500,
        name: "Merrill",
        icon: "./assets/rank-merrill.png"
    },
    {
        elo: 700,
        name: "Concrete",
        icon: "./assets/rank-concrete.png"
    },
    {
        elo: 900,
        name: "Water",
        icon: "./assets/rank-water.png"
    },
    {
        elo: 1100,
        name: "Nathan",
        icon: "./assets/rank-nathan.png"
    },
    {
        elo: 1300,
        name: "Skilled",
        icon: "./assets/rank-skilled.png"
    },
    {
        elo: 1500,
        name: "Prodigious",
        icon: "./assets/rank-prodigious.png"
    },
    {
        elo: 1700,
        name: "Elite",
        icon: "./assets/rank-elite.png"
    },
    {
        elo: 2000,
        name: "Master",
        icon: "./assets/rank-master.png"
    },
    {
        elo: 2500,
        name: "Chenmaster",
        icon: "./assets/rank-chenmaster.png"
    },
    {
        elo: 1000000000,
        name: "Chenmeister",
        icon: "./assets/rank-chenmeister.png"
    }, 
];
function loadRankIcons() {
    for (let rank of RANKS){
        const icon = loadImage(rank.icon);
        rank.icon = icon;
    }
}
function getRank(elo) {
    for (let rank of RANKS){
        if (elo < rank.elo) return rank;
    }
    return RANKS[RANKS.length - 1];
}
const LOG_1_05 = Math.log(1.05);
function getLevel(xp) {
    return floor(log(sqrt(xp) / 100 + 1) / LOG_1_05 + 1);
}
function getXp(level) {
    return floor((100 * (pow(1.05, level - 1) - 1)) ** 2);
}

//# sourceMappingURL=index.c285e61c.js.map
