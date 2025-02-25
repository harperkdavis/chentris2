import * as tetris from './src/tetris.ts';

for (const key in tetris) {
    window[key] = tetris[key];
}