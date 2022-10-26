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
const COMBOS = {
    "00": {
        name: "none",
        lines: {
            type: "add",
            count: 0
        },
        juice: {
            type: "add",
            count: 0
        }
    },
    // 1 - order
    "1l": {
        name: "single",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 100
        }
    },
    "2l": {
        name: "double",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 400
        }
    },
    "3l": {
        name: "triple",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 900
        }
    },
    "4l": {
        name: "chentris",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 1600
        }
    },
    "1t": {
        name: "t-spin single",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 400
        }
    },
    "2t": {
        name: "t-spin double",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 1000
        }
    },
    "3t": {
        name: "t-spin triple",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "add",
            count: 3200
        }
    },
    "fc": {
        name: "full clear",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "multiply",
            count: 2
        }
    },
    // 2 - order
    "1l1l": {
        name: "snake eyes",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 200
        }
    },
    "1l2l": {
        name: "the old one two",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 500
        }
    },
    "1l3l": {
        name: "the old one three",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1000
        }
    },
    "1l4l": {
        name: "big five",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 1800
        }
    },
    "1l1t": {
        name: "snake spins",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 500
        }
    },
    "1l2t": {
        name: "the old one two spin",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 1100
        }
    },
    "1l3t": {
        name: "the old one three spin",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "add",
            count: 3400
        }
    },
    "1lfc": {
        name: "one line full clear",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "multiply",
            count: 2
        }
    },
    "2l1l": {
        name: "stepdown",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 300
        }
    },
    "2l2l": {
        name: "halftris",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 600
        }
    },
    "2l3l": {
        name: "up a notch",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1100
        }
    },
    "2l4l": {
        name: "big six",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 2000
        }
    },
    "2l1t": {
        name: "spindown",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 600
        }
    },
    "2l2t": {
        name: "spindle",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 1200
        }
    },
    "2l3t": {
        name: "up a spin",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "add",
            count: 3600
        }
    },
    "2lfc": {
        name: "double trouble",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "multiply",
            count: 2
        }
    },
    "3l1l": {
        name: "downtris",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 500
        }
    },
    "3l2l": {
        name: "leapdown",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 800
        }
    },
    "3l3l": {
        name: "trippy",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1300
        }
    },
    "3l4l": {
        name: "lucky guy",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 2400
        }
    },
    "3l1t": {
        name: "spinleap",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 800
        }
    },
    "3l2t": {
        name: "trippy spin",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 1400
        }
    },
    "3l3t": {
        name: "linespin equality",
        lines: {
            type: "add",
            count: 7
        },
        juice: {
            type: "add",
            count: 4000
        }
    },
    "3lfc": {
        name: "trippy clear",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "multiply",
            count: 2
        }
    },
    "4l1l": {
        name: "small five",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 900
        }
    },
    "4l2l": {
        name: "small six",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 1200
        }
    },
    "4l3l": {
        name: "guy lucky",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 1700
        }
    },
    "4l4l": {
        name: "b2b",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "add",
            count: 3200
        }
    },
    "4l1t": {
        name: "chenspin",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1200
        }
    },
    "4l2t": {
        name: "halfdown",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 1800
        }
    },
    "4l3t": {
        name: "spinlucky",
        lines: {
            type: "add",
            count: 8
        },
        juice: {
            type: "add",
            count: 4800
        }
    },
    "4lfc": {
        name: "perfect clear",
        lines: {
            type: "add",
            count: 8
        },
        juice: {
            type: "multiply",
            count: 2
        }
    },
    "1t1l": {
        name: "singulari-t",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 300
        }
    },
    "1t2l": {
        name: "reverse spindle",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 600
        }
    },
    "1t3l": {
        name: "trip from t",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1100
        }
    },
    "1t4l": {
        name: "post-t chentris",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 2000
        }
    },
    "1t1t": {
        name: "double it",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 600
        }
    },
    "1t2t": {
        name: "red-t blue-t",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 1200
        }
    },
    "1t3t": {
        name: "chen-t",
        lines: {
            type: "add",
            count: 7
        },
        juice: {
            type: "add",
            count: 3600
        }
    },
    "1tfc": {
        name: "t-clear",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "multiply",
            count: 2
        }
    },
    "2t1l": {
        name: "keep it on the t-l",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 500
        }
    },
    "2t2l": {
        name: "2 spin 2 line",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 800
        }
    },
    "2t3l": {
        name: "spinny trip",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1300
        }
    },
    "2t4l": {
        name: "2 spin 4 me",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 2400
        }
    },
    "2t1t": {
        name: "stepdown-t",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 800
        }
    },
    "2t2t": {
        name: "adds to 40",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 1400
        }
    },
    "2t3t": {
        name: "nathan special",
        lines: {
            type: "add",
            count: 7
        },
        juice: {
            type: "add",
            count: 4000
        }
    },
    "2tfc": {
        name: "double t-clear",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "multiply",
            count: 2
        }
    },
    "3t1l": {
        name: "leapspin",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 300
        }
    },
    "3t2l": {
        name: "stepspin",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 600
        }
    },
    "3t3l": {
        name: "trippy spinline",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1100
        }
    },
    "3t4l": {
        name: "luckyspin",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "add",
            count: 2000
        }
    },
    "3t1t": {
        name: "t-chen",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 600
        }
    },
    "3t2t": {
        name: "reverse nathan special",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "add",
            count: 1200
        }
    },
    "3t3t": {
        name: "trip trip goose",
        lines: {
            type: "add",
            count: 8
        },
        juice: {
            type: "add",
            count: 3600
        }
    },
    "3tfc": {
        name: "nasty triple t-clear",
        lines: {
            type: "add",
            count: 8
        },
        juice: {
            type: "multiply",
            count: 2
        }
    },
    // 3 - order
    // 1 line
    "1l1l1l": {
        name: "three eyed snake",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 500
        }
    },
    "1l1l2l": {
        name: "fibonacci-3",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 800
        }
    },
    "1l1l3l": {
        name: "1 + 1 = 3",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1300
        }
    },
    "1l1l4l": {
        name: "eeh ?!",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 2400
        }
    },
    "1l1l1l1l": {
        name: "still single?",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 900
        }
    },
    "1l1l1l1l1l": {
        name: "leave the house",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1700
        }
    },
    "1l1l2l3l": {
        name: "fibonacci-4",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 2500
        }
    },
    "1l2l1l": {
        name: "up then down",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 500
        }
    },
    "1l2l2l": {
        name: "bad at counting",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 800
        }
    },
    "1l2l3l": {
        name: "counting up",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1300
        }
    },
    "1l2l4l": {
        name: "powers of two",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 2400
        }
    },
    "1l2l3l4l": {
        name: "counting higher",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "add",
            count: 3200
        }
    },
    "1l3l1l": {
        name: "small spark",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 500
        }
    },
    "1l3l2l": {
        name: "really bad at counting",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 800
        }
    },
    "1l3l3l": {
        name: "two triple post single",
        lines: {
            type: "add",
            count: 3
        },
        juice: {
            type: "add",
            count: 1300
        }
    },
    "1l3l4l": {
        name: "building chentris",
        lines: {
            type: "add",
            count: 5
        },
        juice: {
            type: "add",
            count: 2400
        }
    },
    "1l4l1l": {
        name: "big spark",
        lines: {
            type: "add",
            count: 1
        },
        juice: {
            type: "add",
            count: 900
        }
    },
    "1l4l2l": {
        name: "single meaning",
        lines: {
            type: "add",
            count: 2
        },
        juice: {
            type: "add",
            count: 1200
        }
    },
    "1l4l3l": {
        name: "composite",
        lines: {
            type: "add",
            count: 4
        },
        juice: {
            type: "add",
            count: 1700
        }
    },
    "1l4l4l": {
        name: "single into b2b",
        lines: {
            type: "add",
            count: 6
        },
        juice: {
            type: "add",
            count: 3200
        }
    }
};
const T_CHECK = [
    [
        1,
        0,
        1
    ],
    [
        0,
        0,
        0
    ],
    [
        1,
        0,
        1
    ]
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
                2,
                0
            ],
            [
                1,
                1
            ],
            [
                2,
                1
            ],
            [
                -1,
                0
            ],
            [
                -2,
                0
            ],
            [
                -1,
                1
            ],
            [
                -2,
                1
            ],
            [
                0,
                -1
            ],
            [
                3,
                0
            ],
            [
                -3,
                0
            ]
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
        ],
        3: [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                -1,
                1
            ],
            [
                -1,
                2
            ],
            [
                0,
                -1
            ],
            [
                0,
                -2
            ],
            [
                -1,
                -1
            ],
            [
                -1,
                -2
            ],
            [
                1,
                0
            ],
            [
                0,
                3
            ],
            [
                0,
                -3
            ]
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
                -2,
                0
            ],
            [
                -1,
                -1
            ],
            [
                -2,
                -1
            ],
            [
                1,
                0
            ],
            [
                2,
                0
            ],
            [
                1,
                -1
            ],
            [
                2,
                -1
            ],
            [
                0,
                1
            ],
            [
                -3,
                0
            ],
            [
                3,
                0
            ]
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
        ],
        1: [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                1,
                1
            ],
            [
                1,
                2
            ],
            [
                0,
                -1
            ],
            [
                0,
                -2
            ],
            [
                1,
                -1
            ],
            [
                1,
                -2
            ],
            [
                -1,
                0
            ],
            [
                0,
                3
            ],
            [
                0,
                -3
            ]
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
                -2,
                0
            ],
            [
                1,
                0
            ],
            [
                2,
                0
            ],
            [
                0,
                1
            ]
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
        ],
        3: [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                0,
                -1
            ],
            [
                0,
                -2
            ],
            [
                -1,
                0
            ]
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
        ],
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
                2,
                0
            ],
            [
                -1,
                0
            ],
            [
                -2,
                0
            ],
            [
                0,
                -1
            ]
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
        ],
        1: [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                0,
                -1
            ],
            [
                0,
                -2
            ],
            [
                1,
                0
            ]
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
const COMPETITIVE_DEFAULTS = {
    competitive: true,
    initialSpeed: 80,
    resendGarbage: true,
    forgivingCombos: false,
    garbageTurns: 1,
    garbageDefense: false
};
const NORMAL_DEFAULTS = {
    competitive: false,
    initialSpeed: 80,
    resendGarbage: true,
    forgivingCombos: true,
    garbageTurns: 2,
    garbageDefense: true
};
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
        garbagePool: 0,
        move: 0,
        combo: "",
        lastDamager: playerId,
        garbageQueue: [],
        clears: 0,
        juice: 0,
        lines: 0,
        finishingMoves: -1
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
        garbagePool: board.garbagePool,
        move: board.move,
        combo: board.combo,
        lastDamager: board.lastDamager,
        garbageQueue: [
            ...board.garbageQueue
        ],
        clears: board.clears,
        juice: board.juice,
        lines: board.lines,
        finishingMoves: board.finishingMoves
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
function rotateArray(array, rotation) {
    const rot = mod(rotation, 4);
    if (rot <= 0) return array.map((row)=>[
            ...row
        ]);
    else if (rot === 1) return array.map((row, i)=>row.map((_, j)=>array[array.length - j - 1][i]));
    else if (rot === 2) return array.map((row, i)=>row.map((_, j)=>array[array.length - i - 1][array.length - j - 1]));
    else return array.map((row, i)=>row.map((_, j)=>array[j][array.length - i - 1]));
}
function getRotatedPiece(piece, rotation) {
    const layout = PIECES[piece].layout;
    return rotateArray(layout, rotation);
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
        submoves: [],
        lastMoveSuccessful: true,
        dropLines: 0
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
        ],
        lastMoveSuccessful: false,
        dropLines: 0
    };
    if (submove === Direction.Left) {
        if (pieceFits(board.bag[0], board, state.pieceX - 1, state.pieceY, state.pieceRotation)) {
            state.pieceX -= 1;
            state.submoves.push(Direction.Left);
            state.lastMoveSuccessful = true;
        }
    } else if (submove === Direction.Right) {
        if (pieceFits(board.bag[0], board, state.pieceX + 1, state.pieceY, state.pieceRotation)) {
            state.pieceX += 1;
            state.submoves.push(Direction.Right);
            state.lastMoveSuccessful = true;
        }
    } else if (submove === Direction.Down) {
        if (pieceFits(board.bag[0], board, state.pieceX, state.pieceY + 1, state.pieceRotation)) {
            state.pieceY += 1;
            state.submoves.push(Direction.Down);
            state.lastMoveSuccessful = true;
        }
    } else if (submove === Direction.Drop) {
        state.submoves.push(Direction.Drop);
        state.lastMoveSuccessful = true;
        while(pieceFits(board.bag[0], board, state.pieceX, state.pieceY + 1, state.pieceRotation))state.pieceY += 1;
        state.dropLines = state.pieceY - submoveState.pieceY;
    } else if (submove === Direction.RotateRight || submove === Direction.RotateLeft || submove === Direction.Rotate180) {
        if (board.bag[0] !== Piece.O) {
            const rotate = submove === Direction.RotateRight ? 1 : submove === Direction.RotateLeft ? -1 : 2;
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
                    state.lastMoveSuccessful = true;
                    break;
                }
            }
        }
    }
    return state;
}
function getJuiceLevel(juice) {
    return Math.log(juice / 2000 + 1) / Math.log(2);
}
function getLevelJuice(level) {
    return 2000 * (Math.pow(2, level) - 1);
}
function getCombos(combo) {
    let combos = [];
    let valid = 0;
    for(let i = 0; i < combo.length / 2; i += 1){
        if (combo[i * 2] === "0") continue;
        let addCombo;
        const longCombo = combo.substring(0, i * 2 + 2).replace(/0/g, "");
        for(let j = 0; j <= longCombo.length / 2; j += 1){
            const newCombo = COMBOS[longCombo.substring(j * 2, i * 2 + 2)];
            if (newCombo) {
                addCombo = {
                    name: newCombo.name,
                    lines: {
                        type: newCombo.lines.type,
                        count: newCombo.lines.count
                    },
                    juice: {
                        type: newCombo.juice.type,
                        count: newCombo.juice.count
                    }
                };
                break;
            }
        }
        if (addCombo) {
            addCombo.original = combo.substring(i * 2, i * 2 + 2);
            if (addCombo.lines.type === "add") addCombo.lines.count = addCombo.lines.count + Math.max(0, Math.floor(valid / 2));
            else addCombo.lines.count = addCombo.lines.count * Math.max(1, Math.floor(valid / 2));
            if (addCombo.juice.type === "add") addCombo.juice.count = addCombo.juice.count * Math.max(1, valid - 1);
            combos.push(addCombo);
            valid += 1;
        }
    }
    return combos;
}
function makeMove(move, board, generator, rules, ignoreGarbage = false) {
    if (board.lost) return board;
    let newBoard = deepCopyBoard(board);
    let usedPiece = Piece.Empty;
    let submoveState = defaultSubmoveState();
    switch(move.type){
        case MoveType.Move:
            for (const submove of move.submoves || [])submoveState = makeSubmove(submove, newBoard, submoveState);
            const piece = getRotatedPiece(newBoard.bag[0], submoveState.pieceRotation);
            let over = true;
            for(let i = 0; i < piece.length; i++){
                for(let j = 0; j < piece[i].length; j++)if (piece[i][j] === 1) {
                    const index = (submoveState.pieceY + i) * 10 + submoveState.pieceX + j;
                    newBoard.tiles[index] = newBoard.bag[0];
                    if (index >= 200) over = false;
                }
            }
            usedPiece = newBoard.bag.shift() || Piece.Empty;
            newBoard.canHold = true;
            if (over) newBoard.lost = true;
            if (newBoard.finishingMoves >= 0) newBoard.finishingMoves -= 1;
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
            let garbage = move.garbage || 0;
            if (highestTile(newBoard) - garbage <= 0 || highestGarbageTile(newBoard) - garbage <= 20) {
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
        if (cleared) {
            if (rules.resendGarbage) clears += 1;
            else if (line.every((tile)=>tile !== Piece.Garbage)) clears += 1;
        } else lines.push(line);
    }
    newBoard.clears = clears;
    let tSpin = false;
    newBoard.lines += newBoard.clears;
    if (newBoard.clears > 0) {
        if (board.finishingMoves >= 0) newBoard.finishingMoves += newBoard.clears;
        let j1 = 0;
        for(let i2 = 0; i2 < newBoard.clears; i2++){
            if (newBoard.garbageQueue.length <= 0) break;
            j1 += 1;
            const garbage1 = newBoard.garbageQueue.shift();
            garbage1.amount -= 1;
            if (garbage1.amount > 0) newBoard.garbageQueue.unshift(garbage1);
        }
        newBoard.clears -= j1;
        if (rules.garbageDefense) for (let garbage2 of newBoard.garbageQueue)garbage2.turns += 1;
        if (newBoard.clears > 0 && usedPiece === Piece.T && submoveState.dropLines === 0) {
            const submoves = move.submoves || [];
            const lastMove = [
                ...submoves
            ].reverse().find((submove)=>submove !== Direction.Down && submove !== Direction.Drop);
            if (lastMove === Direction.RotateLeft || lastMove === Direction.RotateRight) {
                function check(x, y) {
                    return x < 0 || x >= 10 || y < 0 || y >= 40 || newBoard.tiles[y * 10 + x] !== Piece.Empty;
                }
                const piece1 = rotateArray(T_CHECK, submoveState.pieceRotation);
                let corners = 0;
                for(let i3 = 0; i3 < piece1.length; i3++)for(let j2 = 0; j2 < piece1[i3].length; j2++){
                    if (piece1[i3][j2] === 1) {
                        if (check(submoveState.pieceX + j2, submoveState.pieceY + i3)) corners += 1;
                    }
                }
                if (corners >= 3) tSpin = true;
            }
        }
    }
    const newTiles = new Array(400).fill(Piece.Empty);
    for(let i4 = 0; i4 < lines.length; i4++)newTiles.splice((i4 + (40 - lines.length)) * 10, 10, ...lines[i4]);
    newBoard.tiles = newTiles;
    if (!ignoreGarbage && move.type === MoveType.Move) {
        for(let i5 = 0; i5 < newBoard.garbageQueue.length; i5++){
            const garbage3 = newBoard.garbageQueue[i5];
            garbage3.turns -= 1;
            if (garbage3.turns <= 0) {
                newBoard.lastDamager = garbage3.player;
                newBoard = makeMove({
                    type: MoveType.AddGarbage,
                    garbage: garbage3.amount
                }, newBoard, generator, rules, true);
            }
        }
        newBoard.garbageQueue = newBoard.garbageQueue.filter((garbage)=>garbage.turns > 0);
    }
    const newLayout = PIECES[newBoard.bag[0]].layout;
    for(let i6 = 0; i6 < newLayout.length; i6++){
        for(let j3 = 0; j3 < newLayout[i6].length; j3++)if (newLayout[i6][j3] === 1) {
            const index1 = (i6 + 16) * 10 + (j3 + 3);
            if (newBoard.tiles[index1] !== Piece.Empty) newBoard.lost = true;
        }
    }
    if (move.type === MoveType.Move) {
        if (newBoard.clears <= 0) {
            if (newBoard.combo.length >= 2) {
                if (!rules.forgivingCombos || newBoard.combo.substring(newBoard.combo.length - 2) === "00") {
                    if (newBoard.finishingMoves < 0) newBoard.combo = "";
                } else newBoard.combo += "00";
            }
        } else {
            newBoard.combo += newBoard.clears + (tSpin ? "t" : "l");
            if (newTiles.every((tile)=>tile === Piece.Empty)) newBoard.combo += "fc";
            const combos = getCombos(newBoard.combo);
            const lastCombo = combos[combos.length - 1];
            if (lastCombo.juice.type === "multiply") {
                let totalJuice = 0;
                for (let combo of combos){
                    if (combo.juice.type === "multiply") continue;
                    totalJuice += combo.juice.count;
                }
                newBoard.juice += totalJuice;
            } else newBoard.juice += lastCombo.juice.count;
        }
    }
    if (newBoard.finishingMoves < 0 && board.finishingMoves >= 0) newBoard.lost = true;
    return newBoard;
}
function mod(n, m) {
    return (n % m + m) % m;
}

//# sourceMappingURL=index.988c21c6.js.map
