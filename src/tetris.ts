export const PIECES = [
    {
        layout: [ // I-piece 0
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], 
        color: [130, 250, 230],
        width: 4,
    },
    {
        layout: [ // J-piece 1
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ], color: [130, 150, 250],
        width: 3,
    },
    {
        layout: [ // L-piece 2
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0]
        ], 
        color: [240, 160, 110],
        width: 3,
    },
    {
        layout: [ // O-piece 3
            [1, 1],
            [1, 1]
        ], 
        color: [240, 230, 110],
        width: 2,
    },
    {
        layout: [ // T-piece 4
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ], 
        color: [180, 130, 240],
        width: 3,
    },
    {
        layout: [ // Z-piece 5
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ], 
        color: [240, 130, 150],
        width: 3,
    },
    {
        layout: [ // S-piece 6
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ], 
        color: [130, 240, 120],
        width: 3,
    },
    {
        layout: [ // Garbage 7 (Not intended to be used)
            [1]
        ],
        color: [200, 200, 200],
        width: 3,
    }
];

export interface Cosmetic<T> {
    data: T,
    levelRequirement: number,
    juiceCost: number
}

export type Palette = [number, number, number][];
export type NameColor = [number, number, number];
export type Banner = string;

function hexToRgb(hex: string): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
}

export const COSM_PALETTES: { [key: string]: Cosmetic<Palette> } = {
    'Default': {
        data: [
            [130, 250, 230], // I 
            [130, 150, 250], // J
            [240, 160, 110], // L
            [240, 230, 110], // O
            [180, 130, 240], // T
            [240, 130, 150], // Z
            [130, 240, 120], // S
            [200, 200, 200] // G
        ],
        levelRequirement: 0,
        juiceCost: 0,
    },
    'Alternate': {
        data: [
            [180, 130, 240], // I 
            [130, 240, 120], // J
            [240, 130, 150], // L
            [130, 250, 230], // O
            [240, 230, 110], // T
            [240, 160, 110], // Z
            [130, 150, 250], // S
            [200, 200, 200] // G
        ],
        levelRequirement: 0,
        juiceCost: 1000,
    },
    'Deep': {
        data: [
            hexToRgb('#43aa8b'),
            hexToRgb('#577590'),
            hexToRgb('#f8961e'),
            hexToRgb('#f9c74f'),
            hexToRgb('#f3722c'),
            hexToRgb('#f94144'),
            hexToRgb('#90be6d'),
            [200, 200, 200] // G
        ],
        levelRequirement: 0,
        juiceCost: 10_000,
    },
    'Vintage': {
        data: [
            hexToRgb('#797d62'),
            hexToRgb('#9b9b7a'),
            hexToRgb('#d9ae94'),
            hexToRgb('#f1dca7'),
            hexToRgb('#ffcb69'),
            hexToRgb('#d08c60'),
            hexToRgb('#997b66'),
            [200, 200, 200] // G
        ],
        levelRequirement: 0,
        juiceCost: 100_000,
    },
    'Terminal': {
        data: [
            [0, 255, 255], // I 
            [0, 0, 255], // J
            [255, 127, 0], // L
            [255, 255, 0], // O
            [255, 0, 255], // T
            [255, 0, 0], // Z
            [0, 255, 0], // S
            [127, 127, 127] // G
        ],
        levelRequirement: 5,
        juiceCost: 200_000,
    },
    'Sunset': {
        data: [
            hexToRgb('#003f5c'),
            hexToRgb('#58508d'),
            hexToRgb('#bc5090'),
            hexToRgb('#ff6361'),
            hexToRgb('#ffa600'),
            hexToRgb('#ffd380'),
            hexToRgb('#ffe9c0'),
            [200, 200, 200] // G
        ],
        levelRequirement: 10,
        juiceCost: 400_000,
    },
    'Fiery': {
        data: [
            hexToRgb('#e62314'),
            hexToRgb('#e83715'),
            hexToRgb('#ea4c15'),
            hexToRgb('#ec6116'),
            hexToRgb('#ed7517'),
            hexToRgb('#ef8a17'),
            hexToRgb('#f19e18'),
            [200, 200, 200] // G
        ],
        levelRequirement: 20,
        juiceCost: 1_000_000,
    },
    'Ocean': {
        data: [
            hexToRgb('#145277'),
            hexToRgb('#266785'),
            hexToRgb('#397c93'),
            hexToRgb('#4c91a1'),
            hexToRgb('#5ea6af'),
            hexToRgb('#71bbbd'),
            hexToRgb('#83d0cb'),
            [200, 200, 200] // G
        ],
        levelRequirement: 20,
        juiceCost: 1_000_000,
    },
    'Pink': {
        data: [
            hexToRgb('#fcf3c4'),
            hexToRgb('#fcdbbe'),
            hexToRgb('#fbc3b8'),
            hexToRgb('#fbabb2'),
            hexToRgb('#fa92ac'),
            hexToRgb('#fa7aa6'),
            hexToRgb('#f962a0'),
            [255, 200, 255] // G
        ],
        levelRequirement: 30,
        juiceCost: 3_000_000,
    },
    'Conditional Formatting': {
        data: [
            hexToRgb('#84e3c8'),
            hexToRgb('#a8e6cf'),
            hexToRgb('#dcedc1'),
            hexToRgb('#ffd3b6'),
            hexToRgb('#ffaaa5'),
            hexToRgb('#ff8b94'),
            hexToRgb('#ff7480'),
            [200, 200, 200] // G
        ],
        levelRequirement: 30,
        juiceCost: 20_000_000,
    },
    'Monochrome': {
        data: [
            [200, 200, 200],
            [200, 200, 200],
            [200, 200, 200],
            [200, 200, 200],
            [200, 200, 200],
            [200, 200, 200],
            [200, 200, 200],
            [200, 200, 200] // G
        ],
        levelRequirement: 30,
        juiceCost: 50_000_000,
    },
    'Aura': {
        data: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0] // G
        ],
        levelRequirement: 50,
        juiceCost: 1_000_000_000,
    },
};

export const COSM_NAME_COLORS: { [key: string]: Cosmetic<NameColor> } = {
    'Default': {
        data: [0, 0, 0],
        levelRequirement: 0,
        juiceCost: 0,
    },
    'Red': {
        data: [200, 0, 0],
        levelRequirement: 10,
        juiceCost: 0,
    },
    'Blue': {
        data: [0, 0, 200],
        levelRequirement: 20,
        juiceCost: 0,
    },
    'Green': {
        data: [0, 200, 0],
        levelRequirement: 30,
        juiceCost: 0,
    },
    'Purple': {
        data: [100, 50, 200],
        levelRequirement: 40,
        juiceCost: 0,
    },
    'Aura': {
        data: [255, 255, 255],
        levelRequirement: 50,
        juiceCost: 0,
    },
};

export const COSM_BANNERS: { [key: string]: Cosmetic<Banner> } = {
    'Default': {
        data: 'bannerDefault.png',
        levelRequirement: 0,
        juiceCost: 0,
    },
    'Gray': {
        data: 'bannerGray.png',
        levelRequirement: 0,
        juiceCost: 5_000,
    },
    'Blue': {
        data: 'bannerBlue.png',
        levelRequirement: 0,
        juiceCost: 10_000,
    },
    'Blocks': {
        data: 'bannerBlocks.png',
        levelRequirement: 0,
        juiceCost: 10_000,
    },
    'Fade': {
        data: 'bannerFade.png',
        levelRequirement: 0,
        juiceCost: 50_000,
    },
    'Certified Master': {
        data: 'bannerMaster.png',
        levelRequirement: 0,
        juiceCost: 200_000,
    },
    'Nathan Mode ON': {
        data: 'bannerNathan.png',
        levelRequirement: 0,
        juiceCost: 300_000,
    },
    'Karl Mode ON': {
        data: 'bannerKarl.png',
        levelRequirement: 0,
        juiceCost: 300_000,
    },
    'Silly Mode ON': {
        data: 'bannerSilly.png',
        levelRequirement: 0,
        juiceCost: 500_000,
    },
    'Does anyone have any methods at all': {
        data: 'bannerMethods.png',
        levelRequirement: 0,
        juiceCost: 500_000,
    },
    'Nebula': {
        data: 'bannerNebula.png',
        levelRequirement: 0,
        juiceCost: 1_000_000,
    },
    'Freedom': {
        data: 'bannerFreedom.png',
        levelRequirement: 0,
        juiceCost: 1_000_000,
    },
    'Aura': {
        data: 'bannerAura.png',
        levelRequirement: 50,
        juiceCost: 1_000_000_000,
    },
};

export const COMBOS = {
    '00': { name: 'none', lines: { type: 'add', count: 0 }, juice: { type: 'add', count: 0 }},
    // 1 - order

    '1l': { name: 'single', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 } },
    '2l': { name: 'double', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 } },
    '3l': { name: 'triple', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 } },
    '4l': { name: 'chentris', lines: { type: 'add', count: 4 }, juice: { type: 'add', count: 1600 } },
    '1t': { name: 't-spin single', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 } },
    '2t': { name: 't-spin double', lines: { type: 'add', count: 4 }, juice: { type: 'add', count: 1000 } },
    '3t': { name: 't-spin triple', lines: { type: 'add', count: 6 }, juice: { type: 'add', count: 3200 } },
    'fc': { name: 'full clear', lines: { type: 'add', count: 4 }, juice: { type: 'multiply', count: 2 } },

    // 2 - order

    '1l1l': { name: 'snake eyes', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 100 } },
    '1l2l': { name: 'the old one two', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 100 } },
    '1l3l': { name: 'the old one three', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 + 100 } },
    '1l4l': { name: 'big five', lines: { type: 'add', count: 4 }, juice: { type: 'add', count: 1600 + 200 } },
    '1l1t': { name: 'snake spins', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 100 } },
    '1l2t': { name: 'the old one two spin', lines: { type: 'add', count: 4 }, juice: { type: 'add', count: 1000 + 100 } },
    '1l3t': { name: 'the old one three spin', lines: { type: 'add', count: 6 }, juice: { type: 'add', count: 3200 + 200 } },
    '1lfc': { name: 'one line full clear', lines: { type: 'add', count: 4 }, juice: { type: 'multiply', count: 2 } },

    '2l1l': { name: 'stepdown', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 200 } },
    '2l2l': { name: 'halftris', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 200 } },
    '2l3l': { name: 'up a notch', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 + 200 } },
    '2l4l': { name: 'big six', lines: { type: 'add', count: 4 }, juice: { type: 'add', count: 1600 + 400 } },
    '2l1t': { name: 'spindown', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 200 } },
    '2l2t': { name: 'spindle', lines: { type: 'add', count: 4 }, juice: { type: 'add', count: 1000 + 200 } },
    '2l3t': { name: 'up a spin', lines: { type: 'add', count: 6 }, juice: { type: 'add', count: 3200 + 400 } },
    '2lfc': { name: 'double trouble', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'multiply', count: 2 } },

    '3l1l': { name: 'downtris', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 400 } },
    '3l2l': { name: 'leapdown', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 400 } },
    '3l3l': { name: 'trippy', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 + 400 } },
    '3l4l': { name: 'lucky guy', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'add', count: 1600 + 800 } },
    '3l1t': { name: 'spinleap', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 400 } },
    '3l2t': { name: 'trippy spin', lines: { type: 'add', count: 4 }, juice: { type: 'add', count: 1000 + 400 } },
    '3l3t': { name: 'linespin equality', lines: { type: 'add', count: 6 + 1 }, juice: { type: 'add', count: 3200 + 800 } },
    '3lfc': { name: 'trippy clear', lines: { type: 'add', count: 4 + 2 }, juice: { type: 'multiply', count: 2 } },

    '4l1l': { name: 'small five', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 800 } },
    '4l2l': { name: 'small six', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 800 } },
    '4l3l': { name: 'guy lucky', lines: { type: 'add', count: 3 + 1 }, juice: { type: 'add', count: 900 + 800 } },
    '4l4l': { name: 'b2b', lines: { type: 'add', count: 4 + 2 }, juice: { type: 'add', count: 1600 + 1600 } },
    '4l1t': { name: 'chenspin', lines: { type: 'add', count: 2 + 1 }, juice: { type: 'add', count: 400 + 800 } },
    '4l2t': { name: 'halfdown', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'add', count: 1000 + 800 } },
    '4l3t': { name: 'spinlucky', lines: { type: 'add', count: 6 + 2 }, juice: { type: 'add', count: 3200 + 1600 } },
    '4lfc': { name: 'perfect clear', lines: { type: 'add', count: 4 + 4 }, juice: { type: 'multiply', count: 2 } },

    '1t1l': { name: 'singulari-t', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 200 } },
    '1t2l': { name: 'reverse spindle', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 200 } },
    '1t3l': { name: 'trip from t', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 + 200 } },
    '1t4l': { name: 'post-t chentris', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'add', count: 1600 + 400 } },
    '1t1t': { name: 'double it', lines: { type: 'add', count: 2 + 1 }, juice: { type: 'add', count: 400 + 200 } },
    '1t2t': { name: 'red-t blue-t', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'add', count: 1000 + 200 } },
    '1t3t': { name: 'chen-t', lines: { type: 'add', count: 6 + 1 }, juice: { type: 'add', count: 3200 + 400 } },
    '1tfc': { name: 't-clear', lines: { type: 'add', count: 4 + 2 }, juice: { type: 'multiply', count: 2 } },

    '2t1l': { name: 'keep it on the t-l', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 400 } },
    '2t2l': { name: '2 spin 2 line', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 400 } },
    '2t3l': { name: 'spinny trip', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 + 400 } },
    '2t4l': { name: '2 spin 4 me', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'add', count: 1600 + 800 } },
    '2t1t': { name: 'stepdown-t', lines: { type: 'add', count: 2 + 1 }, juice: { type: 'add', count: 400 + 400 } },
    '2t2t': { name: 'adds to 40', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'add', count: 1000 + 400 } },
    '2t3t': { name: 'nathan special', lines: { type: 'add', count: 6 + 1 }, juice: { type: 'add', count: 3200 + 800 } },
    '2tfc': { name: 'double t-clear', lines: { type: 'add', count: 4 + 2 }, juice: { type: 'multiply', count: 2 } },

    '3t1l': { name: 'leapspin', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 200 } },
    '3t2l': { name: 'stepspin', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 200 } },
    '3t3l': { name: 'trippy spinline', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 + 200 } },
    '3t4l': { name: 'luckyspin', lines: { type: 'add', count: 4 + 2 }, juice: { type: 'add', count: 1600 + 400 } },
    '3t1t': { name: 't-chen', lines: { type: 'add', count: 2 + 2 }, juice: { type: 'add', count: 400 + 200 } },
    '3t2t': { name: 'reverse nathan special', lines: { type: 'add', count: 4 + 2 }, juice: { type: 'add', count: 1000 + 200 } },
    '3t3t': { name: 'trip trip goose', lines: { type: 'add', count: 6 + 2 }, juice: { type: 'add', count: 3200 + 400 } },
    '3tfc': { name: 'nasty triple t-clear', lines: { type: 'add', count: 4 + 4 }, juice: { type: 'multiply', count: 2 } },

    // 3 - order

    // 1 line

    '1l1l1l': { name: 'three eyed snake', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 400 } },
    '1l1l2l': { name: 'fibonacci-3', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 400 } },
    '1l1l3l': { name: '1 + 1 = 3', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 + 400 } },
    '1l1l4l': { name: 'eeh ?!', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'add', count: 1600 + 800 } },

    '1l1l1l1l': { name: 'still single?', lines: { type: 'add', count: 1 + 1 }, juice: { type: 'add', count: 100 + 800 } },
    '1l1l1l1l1l': { name: 'leave the house', lines: { type: 'add', count: 1 + 2 }, juice: { type: 'add', count: 100 + 1600 } },
    '1l1l2l3l': { name: 'fibonacci-4', lines: { type: 'add', count: 3 + 2 }, juice: { type: 'add', count: 900 + 1600 } },

    '1l2l1l': { name: 'up then down', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 400 } },
    '1l2l2l': { name: 'bad at counting', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 400 } },
    '1l2l3l': { name: 'counting up', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 + 400 } },
    '1l2l4l': { name: 'powers of two', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'add', count: 1600 + 800 } },

    '1l2l3l4l': { name: 'counting higher', lines: { type: 'add', count: 4 + 2 }, juice: { type: 'add', count: 1600 + 1600 } },

    '1l3l1l': { name: 'small spark', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 400 } },
    '1l3l2l': { name: 'really bad at counting', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 400 } },
    '1l3l3l': { name: 'two triple post single', lines: { type: 'add', count: 3 }, juice: { type: 'add', count: 900 + 400 } },
    '1l3l4l': { name: 'building chentris', lines: { type: 'add', count: 4 + 1 }, juice: { type: 'add', count: 1600 + 800 } },

    '1l4l1l': { name: 'big spark', lines: { type: 'add', count: 1 }, juice: { type: 'add', count: 100 + 800 } },
    '1l4l2l': { name: 'single meaning', lines: { type: 'add', count: 2 }, juice: { type: 'add', count: 400 + 800 } },
    '1l4l3l': { name: 'composite', lines: { type: 'add', count: 3 + 1 }, juice: { type: 'add', count: 900 + 800 } },
    '1l4l4l': { name: 'single into b2b', lines: { type: 'add', count: 4 + 2 }, juice: { type: 'add', count: 1600 + 1600 } },

    // 2 lines
};

export const T_CHECK = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
];

export const WALL_KICK = {
    0: {
        3: [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, -2],
            [1, -2],
        ],
        1: [
            [0, 0],
            [-1, 0],
            [-1, 1],
            [0, -2],
            [-1, -2],
        ],
        2: [
            [0, 0],
            [1, 0],
            [2, 0],
            [1, 1],
            [2, 1],
            [-1, 0],
            [-2, 0],
            [-1, 1],
            [-2, 1],
            [0, -1],
            [3, 0],
            [-3, 0]
        ]
    },
    1: {
        0: [
            [0, 0],
            [1, 0],
            [1, -1],
            [0, 2],
            [1, 2],
        ],
        2: [
            [0, 0],
            [1, 0],
            [1, -1],
            [0, 2],
            [1, 2],
        ],
        3: [
            [0, 0],
            [0, 1],
            [0, 2],
            [-1, 1],
            [-1, 2],
            [0, -1],
            [0, -2],
            [-1, -1],
            [-1, -2],
            [1, 0],
            [0, 3],
            [0, -3]
        ]
    },
    2: {
        1: [
            [0, 0],
            [-1, 0],
            [-1, 1],
            [0, -2],
            [-1, -2],
        ],
        3: [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, -2],
            [1, -2],
        ],
        0: [
            [0, 0],
            [-1, 0],
            [-2, 0],
            [-1, -1],
            [-2,-1],
            [1, 0],
            [2, 0],
            [1, -1],
            [2, -1],
            [0, 1],
            [-3, 0],
            [3, 0]
        ]
    },
    3: {
        2: [
            [0, 0],
            [-1, 0],
            [-1, -1],
            [0, 2],
            [-1, 2],
        ],
        0: [
            [0, 0],
            [-1, 0],
            [-1, -1],
            [0, 2],
            [-1, 2],
        ],
        1: [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 1],
            [1, 2],
            [0, -1],
            [0, -2],
            [1, -1],
            [1, -2],
            [-1, 0],
            [0, 3],
            [0, -3]
        ]
    }
}
  
export const WALL_KICK_I = {
    0: {
        3: [
            [0, 0],
            [2, 0],
            [-1, 0],
            [-1, 2],
            [2, -1],
        ],
        1: [
            [0, 0],
            [-2, 0],
            [1, 0],
            [1, 2],
            [-2, -1],
        ],
        2: [
            [0, 0],
            [-1, 0],
            [-2, 0],
            [1, 0],
            [2, 0],
            [0, 1]
        ]
    },
    1: {
        0: [
            [0, 0],
            [2, 0],
            [-1, 0],
            [2, 1],
            [-1, -2],
        ],
        2: [
            [0, 0],
            [-1, 0],
            [2, 0],
            [-1, 2],
            [2, -1],
        ],
        3: [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, -1],
            [0, -2],
            [-1, 0]
        ]
    },
    2: {
        1: [
            [0, 0],
            [-2, 0],
            [1, 0],
            [-2, 1],
            [1, -1],
        ],
        3: [
            [0, 0],
            [2, 0],
            [-1, 0],
            [2, 1],
            [-1, -1],
        ],
        0: [
            [0, 0],
            [1, 0],
            [2, 0],
            [-1, 0],
            [-2, 0],
            [0, -1]
        ]
    },
    3: {
        2: [
            [0, 0],
            [1, 0],
            [-2, 0],
            [1, 2],
            [-2, -1],
        ],
        0: [
            [0, 0],
            [-2, 0],
            [1, 0],
            [-2, 1],
            [1, -2],
        ],
        1: [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, -1],
            [0, -2],
            [1, 0]
        ]
    }
}

export interface Board {
    srng: string,

    tiles: Array<number>,
    bag: Array<Piece>,

    hold: Piece,
    canHold: boolean,

    lost: boolean,

    bagPool: number,
    garbagePool: number,

    move: number,

    combo: string,

    lastDamager: string,
    garbageQueue: Array<any>,

    clears: number,

    juice: number,
    lines: number,

    finishingMoves: number,
};

export interface Move {
    type: MoveType,
    submoves?: Array<Direction>,
    garbage?: number,
};

export interface SubmoveState {
    pieceX: number,
    pieceY: number,
    pieceRotation: number,
    submoves: Array<Direction>,
    lastMoveSuccessful: boolean,
    dropLines: number,
}

export enum Piece {
    Empty = -1,
    I = 0,
    J = 1,
    L = 2,
    O = 3,
    T = 4,
    Z = 5,
    S = 6,
    Garbage = 7,
};

export enum MoveType {
    Move = "move",
    Hold = "hold",
    AddGarbage = "addGarbage",
};

export enum Direction {
    Left = "left",
    Right = "right",

    Down = "down",
    Drop = "drop",

    RotateRight = "rotateRight",
    RotateLeft = "rotateLeft",
    Rotate180 = "rotate180",
};

export interface Rules {
    competitive: boolean,
    initialSpeed: number,
    resendGarbage: boolean,
    forgivingCombos: boolean,
    garbageTurns: number,
    garbageDefense: boolean,
}

export const COMPETITIVE_DEFAULTS: Rules = {
    competitive: true,
    initialSpeed: 80,
    resendGarbage: true,
    forgivingCombos: false,
    garbageTurns: 1,
    garbageDefense: false,
};

export const NORMAL_DEFAULTS: Rules = {
    competitive: false,
    initialSpeed: 80,
    resendGarbage: true,
    forgivingCombos: true,
    garbageTurns: 2,
    garbageDefense: true,
};

export function createNewBag(srng: string, bagIndex: number, generator: Function): Array<Piece> {
    let pieces = [Piece.I, Piece.J, Piece.L, Piece.O, Piece.T, Piece.Z, Piece.S];

    const bag: Array<Piece> = [];
    const rng = generator(`${srng}-bag-${bagIndex}`);

    for (let i = 0; i < 7; i++) {
        const index = Math.floor(rng() * pieces.length);

        bag.push(pieces[index]);
        pieces.splice(index, 1);
    };

    return bag;
}

export function createNewBoard(playerId: string, matchId: string, gameId: string, generator: Function): Board {
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

        combo: '',

        lastDamager: playerId,
        garbageQueue: [],

        clears: 0,

        juice: 0,
        lines: 0,

        finishingMoves: -1,
    };
}

export function deepCopyBoard(board: Board): Board {
    return {
        srng: board.srng,

        tiles: [...board.tiles],
        bag: [...board.bag],

        hold: board.hold,
        canHold: board.canHold,

        lost: board.lost,

        bagPool: board.bagPool,
        garbagePool: board.garbagePool,

        move: board.move,

        combo: board.combo,

        lastDamager: board.lastDamager,
        garbageQueue: [...board.garbageQueue],

        clears: board.clears,

        juice: board.juice,
        lines: board.lines,

        finishingMoves: board.finishingMoves,
    };
}

export function highestTile(board: Board): number {
    for (let i = 0; i < 400; i++) {
        if (board.tiles[i] !== Piece.Empty) {
            return Math.floor(i / 10);
        }
    }
    return 40;
}

export function highestGarbageTile(board: Board): number {
    for (let i = 0; i < 400; i++) {
        if (board.tiles[i] === Piece.Garbage) {
            return Math.floor(i / 10);
        }
    }
    return 40;
}

export function rotateArray(array: Array<Array<number>>, rotation: number): Array<Array<number>> {
    const rot = mod(rotation, 4);

    if (rot <= 0) {
        return array.map(row => [...row]);
    } else if (rot === 1) {
        return array.map((row, i) => row.map((_, j) => array[array.length - j - 1][i]));
    } else if (rot === 2) {
        return array.map((row, i) => row.map((_, j) => array[array.length - i - 1][array.length - j - 1]));
    } else {
        return array.map((row, i) => row.map((_, j) => array[j][array.length - i - 1]));
    } 

}

export function getRotatedPiece(piece: Piece, rotation: number): Array<Array<number>> {
    const layout = PIECES[piece].layout;
    return rotateArray(layout, rotation);
}

export function pieceFits(piece: Piece, board: Board, x: number, y: number, rotation: number): boolean {
    const layout = getRotatedPiece(piece, rotation);

    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {

            if (layout[i][j] === 1) {
                const nx = x + j, ny = y + i;
                const index = (ny) * 10 + nx;

                if (nx < 0 || nx >= 10 || ny < 0 || ny >= 40) {
                    return false;
                }
                if (index > board.tiles.length || index < 0 || board.tiles[index] !== Piece.Empty) {
                    return false;
                }
            }

        }
    }

    return true;
}

export function defaultSubmoveState(): SubmoveState {
    return {
        pieceX: 3,
        pieceY: 16,
        pieceRotation: 0,
        submoves: [],
        lastMoveSuccessful: true,
        dropLines: 0,
    };
}

export function makeSubmove(submove: Direction, board: Board, submoveState: SubmoveState): SubmoveState {

    if (submoveState.submoves.includes(Direction.Drop)) {
        return submoveState;
    }
    
    const state: SubmoveState = {
        pieceX: submoveState.pieceX,
        pieceY: submoveState.pieceY,
        pieceRotation: submoveState.pieceRotation,
        submoves: [...submoveState.submoves],
        lastMoveSuccessful: false,
        dropLines: 0,
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
        while (pieceFits(board.bag[0], board, state.pieceX, state.pieceY + 1, state.pieceRotation)) {
            state.pieceY += 1;
        }
        state.dropLines = state.pieceY - submoveState.pieceY;
    } else if (submove === Direction.RotateRight || submove === Direction.RotateLeft || submove === Direction.Rotate180) {
        if (board.bag[0] !== Piece.O) {

            const rotate = submove === Direction.RotateRight ? 1 : (submove === Direction.RotateLeft ? -1 : 2);
            const wallKickArray = board.bag[0] == Piece.I ? WALL_KICK_I : WALL_KICK;

            const oldRotation = state.pieceRotation;
            const newRotation = mod((state.pieceRotation + rotate), 4);

            for (let i = 0; i < 5; i++) {
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

export function getJuiceLevel(juice: number) {
    return Math.log((juice / 2000) + 1) / Math.log(2);
}

export function getLevelJuice(level: number) {
    return 2000 * (Math.pow(2, level) - 1);
}

export function getCombos(combo: string): Array<any> {
    let combos: Array<any> = [];
    let valid = 0;

    for (let i = 0; i < combo.length / 2; i += 1) {
        if (combo[i * 2] === "0") {
            continue;
        }

        let addCombo;
        const longCombo = combo.substring(0, i * 2 + 2).replace(/0/g, '');
        for (let j = 0; j <= longCombo.length / 2; j += 1) { 
            const newCombo = COMBOS[longCombo.substring(j * 2, i * 2 + 2)];
            if (newCombo) {
                addCombo = { name: newCombo.name, lines: { type: newCombo.lines.type, count: newCombo.lines.count }, juice: { type: newCombo.juice.type, count: newCombo.juice.count } };
                break;
            }
        } 

        if (addCombo) {
            addCombo.original = combo.substring(i * 2, i * 2 + 2);
            if (addCombo.lines.type === 'add') {
                addCombo.lines.count = addCombo.lines.count + Math.max(0, Math.floor(valid / 2));
            } else {
                addCombo.lines.count = addCombo.lines.count * Math.max(1, Math.floor(valid / 2));
            }
            if (addCombo.juice.type === 'add') {
                addCombo.juice.count = addCombo.juice.count * Math.max(1, valid - 1);
            }
            combos.push(addCombo);
            valid += 1;
        }
    }
    return combos;
}

export function makeMove(move: Move, board: Board, generator: Function, rules: Rules, ignoreGarbage = false): Board {

    if (board.lost) {
        return board;
    }
    
    let newBoard = deepCopyBoard(board);

    let usedPiece = Piece.Empty;
    let submoveState = defaultSubmoveState();

    switch (move.type) {
        case MoveType.Move:

            for (const submove of move.submoves || []) {
                submoveState = makeSubmove(submove, newBoard, submoveState);
            }

            const piece = getRotatedPiece(newBoard.bag[0], submoveState.pieceRotation);
            let over = true;

            for (let i = 0; i < piece.length; i++) {
                for (let j = 0; j < piece[i].length; j++) {
                    if (piece[i][j] === 1) {
                        const index = (submoveState.pieceY + i) * 10 + submoveState.pieceX + j;
                        newBoard.tiles[index] = newBoard.bag[0];
                        if (index >= 200) {
                            over = false;
                        }
                    }
                }
            }

            usedPiece = newBoard.bag.shift() || Piece.Empty;
            newBoard.canHold = true;

            if (over) {
                newBoard.lost = true;
            }

            if (newBoard.finishingMoves >= 0) {
                newBoard.finishingMoves -= 1;
            }

            break;
        case MoveType.Hold:
            if (newBoard.canHold) {
                const hold = newBoard.hold;
                newBoard.hold = newBoard.bag[0];
                newBoard.canHold = false;
                if (hold !== Piece.Empty) {
                    newBoard.bag[0] = hold;
                } else {
                    newBoard.bag.shift();
                }
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

            const preTiles = newBoard.tiles.slice(10 * (garbage));
            const postTiles = new Array(garbage * 10)
                .fill(Piece.Empty)
                .map((_, i) => i % 10 === noGarbageIndex ? Piece.Empty : Piece.Garbage);

            newBoard.tiles = [...preTiles, ...postTiles];

            break;
    }

    if (newBoard.bag.length < 7) {
        newBoard.bag = newBoard.bag.concat(createNewBag(newBoard.srng, newBoard.bagPool, generator));
        newBoard.bagPool++;
    }

    const lines: Array<Array<number>> = [];
    let clears = 0;

    for (let i = 0; i < 40; i++) {
        const line = newBoard.tiles.slice(i * 10, (i + 1) * 10);
        const cleared = line.every(tile => tile !== Piece.Empty);
            
        if (cleared) {

            if (rules.resendGarbage) {
                clears += 1;
            } else if (line.every(tile => tile !== Piece.Garbage)) {
                clears += 1;
            }
            
        } else {
            lines.push(line);
        }
    }

    newBoard.clears = clears;
    let tSpin = false;

    newBoard.lines += newBoard.clears;

    if (newBoard.clears > 0) {
        if (board.finishingMoves >= 0) {
            newBoard.finishingMoves += newBoard.clears;
        }
        let j = 0;
        for (let i = 0; i < newBoard.clears; i++) {
            
            if (newBoard.garbageQueue.length <= 0) {
                break;
            }

            j += 1;
            const garbage = newBoard.garbageQueue.shift();

            garbage.amount -= 1;
            if (garbage.amount > 0) {
                newBoard.garbageQueue.unshift(garbage);
            }
        }
        newBoard.clears -= j;

        if (rules.garbageDefense) {
            for (let garbage of newBoard.garbageQueue) {
                garbage.turns += 1;
            }
        }

        if (newBoard.clears > 0 && usedPiece === Piece.T && submoveState.dropLines === 0) {
            const submoves = move.submoves || [];
            const lastMove = [...submoves].reverse().find(submove => submove !== Direction.Down && submove !== Direction.Drop);
            if (lastMove === Direction.RotateLeft || lastMove === Direction.RotateRight) {
                
                function check(x, y) {
                    return x < 0 || x >= 10 || y < 0 || y >= 40 || newBoard.tiles[y * 10 + x] !== Piece.Empty;
                }

                const piece = rotateArray(T_CHECK, submoveState.pieceRotation);

                let corners = 0;

                for (let i = 0; i < piece.length; i++) {
                    for (let j = 0; j < piece[i].length; j++) {
                        if (piece[i][j] === 1) {
                            if (check(submoveState.pieceX + j, submoveState.pieceY + i)) {
                                corners += 1;
                            }
                        }
                    }
                }

                if (corners >= 3) {
                    tSpin = true;
                }

            }
        }
    }

    const newTiles = new Array(400).fill(Piece.Empty);

    for (let i = 0; i < lines.length; i++) {
        newTiles.splice((i + (40 - lines.length)) * 10, 10, ...lines[i]);
    }

    newBoard.tiles = newTiles;

    if (!ignoreGarbage && move.type === MoveType.Move) {

        for (let i = 0; i < newBoard.garbageQueue.length; i++) {
            const garbage = newBoard.garbageQueue[i];
            garbage.turns -= 1;

            if (garbage.turns <= 0) {
                newBoard.lastDamager = garbage.player;
                newBoard = makeMove({ type: MoveType.AddGarbage, garbage: garbage.amount}, newBoard, generator, rules, true);
            }
        }
            
        newBoard.garbageQueue = newBoard.garbageQueue.filter(garbage => garbage.turns > 0);
    }

    const newLayout = PIECES[newBoard.bag[0]].layout;

    for (let i = 0; i < newLayout.length; i++) {
        for (let j = 0; j < newLayout[i].length; j++) {
            if (newLayout[i][j] === 1) {
                const index = (i + 16) * 10 + (j + 3);
                if (newBoard.tiles[index] !== Piece.Empty) {
                    newBoard.lost = true;
                }
            }
        }
    }

    if (move.type === MoveType.Move) {
        if (newBoard.clears <= 0) {
            if (newBoard.combo.length >= 2) {
                if (!rules.forgivingCombos || newBoard.combo.substring(newBoard.combo.length - 2) === '00') {
                    if (newBoard.finishingMoves < 0) { 
                        newBoard.combo = '';
                    }
                } else {
                    newBoard.combo += '00';
                }
            }
        } else {
            newBoard.combo += newBoard.clears + (tSpin ? 't' : 'l');
    
            if (newTiles.every(tile => tile === Piece.Empty)) {
                newBoard.combo += 'fc';
            }

            const combos = getCombos(newBoard.combo);
            const lastCombo = combos[combos.length - 1];

            if (lastCombo.juice.type === 'multiply') {
                let totalJuice = 0;
                for (let combo of combos) {
                    if (combo.juice.type === 'multiply') {
                        continue;
                    }
                    totalJuice += combo.juice.count;
                }
                newBoard.juice += totalJuice;
            } else {
                newBoard.juice += lastCombo.juice.count;
            }
        }
    }

    if (newBoard.finishingMoves < 0 && board.finishingMoves >= 0) {
        newBoard.lost = true;
    }

    return newBoard;

}

export function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

const LOG_1_05 = Math.log(1.05);

export function getLevel(xp: number) {
    return Math.floor(Math.log(Math.sqrt(xp) / 100 + 1) / LOG_1_05 + 1);
}

export function getXp(level: number) {
    return Math.floor((100 * (Math.pow(1.05, level - 1) - 1)) ** 2);
}