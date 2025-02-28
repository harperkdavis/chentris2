const menus = {
    main: [
        {
            name: "FIND MATCH",
            onClick: ()=>{
                socket.io.emit('find_match');
                game.loading = true;
                game.loadMessage = 'Finding match...';
            }
        },
        {
            name: "JOIN MATCH",
            onClick: ()=>{
                state.joiningMatch = true;
                game.isTyping = true;
                game.typedString = '';
                game.typeLengthLimit = 9;
            }
        },
        {
            name: "CREATE MATCH",
            onClick: ()=>{
                socket.io.emit('create_match');
                game.loading = true;
                game.loadMessage = 'Creating...';
            }
        },
        {
            name: "40 LINE SPRINT",
            onClick: ()=>{
                socket.io.emit('create_match', {
                    solo: true,
                    sprint: 40
                });
                game.loading = true;
                game.loadMessage = 'Creating...';
            }
        },
        {
            name: "ZEN",
            onClick: ()=>{
                socket.io.emit('create_match', {
                    solo: true
                });
                game.loading = true;
                game.loadMessage = 'Creating...';
            }
        },
        {
            name: "COSMETICS",
            onClick: ()=>{
                state.inSubMenu = true;
                state.subMenu = submenus.Cosmetics;
            }
        },
        {
            name: "LEADERBOARD",
            onClick: ()=>{
                state.inSubMenu = true;
                state.subMenu = submenus.Leaderboard;
            }
        },
        {
            name: "SETTINGS",
            onClick: ()=>{
                state.inSubMenu = true;
                state.subMenu = submenus.Settings;
                game.settingsPieceX = 0;
                game.settingsRot = 0;
            }
        }
    ]
};
const submenus = {
    Settings: 0,
    Leaderboard: 1,
    Cosmetics: 2
};
function switchMenu(menu) {
    game.menu = menus[menu];
    game.menuButtonAnims = new Array(game.menu.length).fill(0);
    game.menuAnim = 1;
}

//# sourceMappingURL=index.388dfbce.js.map
