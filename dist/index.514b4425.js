const PIECES = [
    {
        layout: [
            [
                0,
                0,
                0,
                0
            ],
            [
                1,
                1,
                1,
                1
            ],
            [
                0,
                0,
                0,
                0
            ],
            [
                0,
                0,
                0,
                0
            ]
        ],
        color: [
            130,
            250,
            230
        ]
    },
    {
        layout: [
            [
                1,
                0,
                0
            ],
            [
                1,
                1,
                1
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            130,
            150,
            250
        ]
    },
    {
        layout: [
            [
                0,
                0,
                1
            ],
            [
                1,
                1,
                1
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            240,
            160,
            110
        ]
    },
    {
        layout: [
            [
                1,
                1
            ],
            [
                1,
                1
            ]
        ],
        color: [
            240,
            230,
            110
        ]
    },
    {
        layout: [
            [
                0,
                1,
                0
            ],
            [
                1,
                1,
                1
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            180,
            130,
            240
        ]
    },
    {
        layout: [
            [
                1,
                1,
                0
            ],
            [
                0,
                1,
                1
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            240,
            130,
            150
        ]
    },
    {
        layout: [
            [
                0,
                1,
                1
            ],
            [
                1,
                1,
                0
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            130,
            240,
            120
        ]
    },
    {
        layout: [
            [
                1
            ]
        ],
        color: [
            200,
            200,
            200
        ]
    }
];
const WALL_KICK = {
    0: {
        3: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                1
            ],
            [
                0,
                -2
            ],
            [
                1,
                -2
            ], 
        ],
        1: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                1
            ],
            [
                0,
                -2
            ],
            [
                -1,
                -2
            ], 
        ]
    },
    1: {
        0: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                -1
            ],
            [
                0,
                2
            ],
            [
                1,
                2
            ], 
        ],
        2: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                -1
            ],
            [
                0,
                2
            ],
            [
                1,
                2
            ], 
        ]
    },
    2: {
        1: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                1
            ],
            [
                0,
                -2
            ],
            [
                -1,
                -2
            ], 
        ],
        3: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                1
            ],
            [
                0,
                -2
            ],
            [
                1,
                -2
            ], 
        ]
    },
    3: {
        2: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                -1
            ],
            [
                0,
                2
            ],
            [
                -1,
                2
            ], 
        ],
        0: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                -1
            ],
            [
                0,
                2
            ],
            [
                -1,
                2
            ], 
        ]
    }
};
const WALL_KICK_I = {
    0: {
        3: [
            [
                0,
                0
            ],
            [
                2,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                2
            ],
            [
                2,
                -1
            ], 
        ],
        1: [
            [
                0,
                0
            ],
            [
                -2,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                2
            ],
            [
                -2,
                -1
            ], 
        ]
    },
    1: {
        0: [
            [
                0,
                0
            ],
            [
                2,
                0
            ],
            [
                -1,
                0
            ],
            [
                2,
                1
            ],
            [
                -1,
                -2
            ], 
        ],
        2: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                2,
                0
            ],
            [
                -1,
                2
            ],
            [
                2,
                -1
            ], 
        ]
    },
    2: {
        1: [
            [
                0,
                0
            ],
            [
                -2,
                0
            ],
            [
                1,
                0
            ],
            [
                -2,
                1
            ],
            [
                1,
                -1
            ], 
        ],
        3: [
            [
                0,
                0
            ],
            [
                2,
                0
            ],
            [
                -1,
                0
            ],
            [
                2,
                1
            ],
            [
                -1,
                -1
            ], 
        ]
    },
    3: {
        2: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                -2,
                0
            ],
            [
                1,
                2
            ],
            [
                -2,
                -1
            ], 
        ],
        0: [
            [
                0,
                0
            ],
            [
                -2,
                0
            ],
            [
                1,
                0
            ],
            [
                -2,
                1
            ],
            [
                1,
                -2
            ], 
        ]
    }
};
let Piece;
(function(Piece) {
    Piece[Piece["Empty"] = -1] = "Empty";
    Piece[Piece["I"] = 0] = "I";
    Piece[Piece["J"] = 1] = "J";
    Piece[Piece["L"] = 2] = "L";
    Piece[Piece["O"] = 3] = "O";
    Piece[Piece["T"] = 4] = "T";
    Piece[Piece["Z"] = 5] = "Z";
    Piece[Piece["S"] = 6] = "S";
    Piece[Piece["Garbage"] = 7] = "Garbage";
})(Piece || (Piece = {}));
let MoveType;
(function(MoveType) {
    MoveType["Move"] = "move";
    MoveType["Hold"] = "hold";
    MoveType["AddGarbage"] = "addGarbage";
})(MoveType || (MoveType = {}));
let Direction;
(function(Direction) {
    Direction["Left"] = "left";
    Direction["Right"] = "right";
    Direction["Down"] = "down";
    Direction["Drop"] = "drop";
    Direction["RotateRight"] = "rotateRight";
    Direction["RotateLeft"] = "rotateLeft";
    Direction["Rotate180"] = "rotate180";
})(Direction || (Direction = {}));
function createNewBag(srng, bagIndex, generator) {
    let pieces = [
        Piece.I,
        Piece.J,
        Piece.L,
        Piece.O,
        Piece.T,
        Piece.Z,
        Piece.S
    ];
    const bag = [];
    const rng = generator(`${srng}-bag-${bagIndex}`);
    for(let i = 0; i < 7; i++){
        const index = Math.floor(rng() * pieces.length);
        bag.push(pieces[index]);
        pieces.splice(index, 1);
    }
    return bag;
}
function createNewBoard(playerId, matchId, gameId, generator) {
    const srng = `${playerId}-${matchId}-${gameId}`;
    return {
        srng,
        tiles: new Array(400).fill(Piece.Empty),
        bag: createNewBag(srng, 0, generator),
        hold: Piece.Empty,
        canHold: true,
        lost: false,
        bagPool: 0,
        garbagePool: 0
    };
}
function deepCopyBoard(board) {
    return {
        srng: board.srng,
        tiles: [
            ...board.tiles
        ],
        bag: [
            ...board.bag
        ],
        hold: board.hold,
        canHold: board.canHold,
        lost: board.lost,
        bagPool: board.bagPool,
        garbagePool: board.garbagePool
    };
}
function highestTile(board) {
    for(let i = 0; i < 400; i++){
        if (board.tiles[i] !== Piece.Empty) return Math.floor(i / 10);
    }
    return 40;
}
function highestGarbageTile(board) {
    for(let i = 0; i < 400; i++){
        if (board.tiles[i] === Piece.Garbage) return Math.floor(i / 10);
    }
    return 40;
}
function getRotatedPiece(piece, rotation) {
    const layout = PIECES[piece].layout;
    const rot = mod(rotation, 4);
    if (rot <= 0) return layout.map((row)=>[
            ...row
        ]);
    else if (rot === 1) return layout.map((row, i)=>row.map((_, j)=>layout[layout.length - j - 1][i]));
    else if (rot === 2) return layout.map((row, i)=>row.map((_, j)=>layout[layout.length - i - 1][layout.length - j - 1]));
    else if (rot >= 3) return layout.map((row, i)=>row.map((_, j)=>layout[j][layout.length - i - 1]));
}
function pieceFits(piece, board, x, y, rotation) {
    const layout = getRotatedPiece(piece, rotation);
    for(let i = 0; i < layout.length; i++){
        for(let j = 0; j < layout[i].length; j++)if (layout[i][j] === 1) {
            const nx = x + j, ny = y + i;
            const index = ny * 10 + nx;
            if (nx < 0 || nx >= 10 || ny < 0 || ny >= 40) return false;
            if (index > board.tiles.length || index < 0 || board.tiles[index] !== Piece.Empty) return false;
        }
    }
    return true;
}
function defaultSubmoveState() {
    return {
        pieceX: 3,
        pieceY: 16,
        pieceRotation: 0,
        submoves: []
    };
}
function makeSubmove(submove, board, submoveState) {
    if (submoveState.submoves.includes(Direction.Drop)) return submoveState;
    const state = {
        pieceX: submoveState.pieceX,
        pieceY: submoveState.pieceY,
        pieceRotation: submoveState.pieceRotation,
        submoves: [
            ...submoveState.submoves
        ]
    };
    if (submove === Direction.Left) {
        if (pieceFits(board.bag[0], board, state.pieceX - 1, state.pieceY, state.pieceRotation)) {
            state.pieceX -= 1;
            state.submoves.push(Direction.Left);
        }
    } else if (submove === Direction.Right) {
        if (pieceFits(board.bag[0], board, state.pieceX + 1, state.pieceY, state.pieceRotation)) {
            state.pieceX += 1;
            state.submoves.push(Direction.Right);
        }
    } else if (submove === Direction.Down) {
        if (pieceFits(board.bag[0], board, state.pieceX, state.pieceY + 1, state.pieceRotation)) {
            state.pieceY += 1;
            state.submoves.push(Direction.Down);
        }
    } else if (submove === Direction.Drop) {
        state.submoves.push(Direction.Drop);
        while(pieceFits(board.bag[0], board, state.pieceX, state.pieceY + 1, state.pieceRotation))state.pieceY += 1;
    } else if (submove === Direction.RotateRight || submove === Direction.RotateLeft) {
        if (board.bag[0] !== Piece.O) {
            const rotate = submove === Direction.RotateRight ? 1 : -1;
            const wallKickArray = board.bag[0] == Piece.I ? WALL_KICK_I : WALL_KICK;
            const oldRotation = state.pieceRotation;
            const newRotation = mod(state.pieceRotation + rotate, 4);
            for(let i = 0; i < 5; i++){
                const wallKick = wallKickArray[oldRotation][newRotation][i];
                if (pieceFits(board.bag[0], board, state.pieceX + wallKick[0], state.pieceY - wallKick[1], newRotation)) {
                    state.pieceX = state.pieceX + wallKick[0];
                    state.pieceY = state.pieceY - wallKick[1];
                    state.pieceRotation = newRotation;
                    state.submoves.push(submove);
                    break;
                }
            }
        }
    } else Direction.Rotate180;
    return state;
}
function makeMove(move, board, generator) {
    if (board.lost) return board;
    const newBoard = deepCopyBoard(board);
    switch(move.type){
        case MoveType.Move:
            let submoveState = defaultSubmoveState();
            for (const submove of move.submoves)submoveState = makeSubmove(submove, newBoard, submoveState);
            const piece = getRotatedPiece(newBoard.bag[0], submoveState.pieceRotation);
            let over = true;
            for(let i = 0; i < piece.length; i++){
                for(let j = 0; j < piece[i].length; j++)if (piece[i][j] === 1) {
                    const index = (submoveState.pieceY + i) * 10 + submoveState.pieceX + j;
                    newBoard.tiles[index] = newBoard.bag[0];
                    if (index >= 200) over = false;
                }
            }
            newBoard.bag.shift();
            newBoard.canHold = true;
            if (over) newBoard.lost = true;
            break;
        case MoveType.Hold:
            if (newBoard.canHold) {
                const hold = newBoard.hold;
                newBoard.hold = newBoard.bag[0];
                newBoard.canHold = false;
                if (hold !== Piece.Empty) newBoard.bag[0] = hold;
                else newBoard.bag.shift();
            }
            break;
        case MoveType.AddGarbage:
            let garbage = move.garbage;
            if (highestTile(newBoard) - move.garbage < 2 || highestGarbageTile(newBoard) - move.garbage <= 20) {
                board.lost = true;
                garbage = highestTile(newBoard);
            }
            const rng = generator(`${newBoard.srng}-garbage-${garbage}-${newBoard.garbagePool}`);
            newBoard.garbagePool += garbage;
            const noGarbageIndex = Math.floor(rng() * 10);
            const preTiles = newBoard.tiles.slice(10 * garbage);
            const postTiles = new Array(garbage * 10).fill(Piece.Empty).map((_, i)=>i % 10 === noGarbageIndex ? Piece.Empty : Piece.Garbage);
            newBoard.tiles = [
                ...preTiles,
                ...postTiles
            ];
            break;
    }
    if (newBoard.bag.length < 7) {
        newBoard.bag = newBoard.bag.concat(createNewBag(newBoard.srng, newBoard.bagPool, generator));
        newBoard.bagPool++;
    }
    const lines = [];
    let clears = 0;
    for(let i1 = 0; i1 < 40; i1++){
        const line = newBoard.tiles.slice(i1 * 10, (i1 + 1) * 10);
        const cleared = line.every((tile)=>tile !== Piece.Empty);
        if (cleared) clears++;
        else lines.push(line);
    }
    const newTiles = new Array(400).fill(Piece.Empty);
    for(let i2 = 0; i2 < lines.length; i2++)newTiles.splice((i2 + (40 - lines.length)) * 10, 10, ...lines[i2]);
    newBoard.tiles = newTiles;
    const newLayout = PIECES[newBoard.bag[0]].layout;
    for(let i3 = 0; i3 < newLayout.length; i3++){
        for(let j1 = 0; j1 < newLayout[i3].length; j1++)if (newLayout[i3][j1] === 1) {
            const index1 = (i3 + 16) * 10 + (j1 + 3);
            if (newBoard.tiles[index1] !== Piece.Empty) newBoard.lost = true;
        }
    }
    return newBoard;
}
function mod(n, m) {
    return (n % m + m) % m;
}

//# sourceMappingURL=index.514b4425.js.map
