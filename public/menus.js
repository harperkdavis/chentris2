const menus = {
    main: [
        {
            name: "FIND MATCH",
            onClick: () => {
                socket.io.emit('find_match');
                game.loading = true;
                game.loadMessage = 'Finding match...';
            }
        },
        {
            name: "JOIN MATCH",
            onClick: () => {
                state.joiningMatch = true;
                game.isTyping = true;
                game.typedString = '';
                game.typeLengthLimit = 9;
            }
        },
        {
            name: "CREATE MATCH",
            onClick: () => {
                socket.io.emit('create_match');
                game.loading = true;
                game.loadMessage = 'Creating...';
            }
        }, 
        {
            name: "SETTINGS",
            onClick: () => {
                state.inSettings = true;
            }
        },
    ],
};

function switchMenu(menu) {
    game.menu = menus[menu];
    game.menuButtonAnims = new Array(game.menu.length).fill(0);
    game.menuAnim = 1;
}