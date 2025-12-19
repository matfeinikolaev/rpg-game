import { play } from './src/js/game.js';
import { Warrior } from './src/characters/Warrior.js';
import { Archer } from './src/characters/Archer.js';
import { Mage } from './src/characters/Mage.js';
import { Dwart } from './src/characters/Dwart.js';
import { Crossbowman } from './src/characters/Crossbowman.js';
import { Demourge } from './src/characters/Demourge.js';

const players = [
    new Warrior(0, 'Алёша Попович'),
    new Archer(5, 'Леголас'),
    new Mage(10, 'Гендальф'),
    new Dwart(15, 'Гимли'),
    new Crossbowman(20, 'Вильгельм Телль'),
    new Demourge(25, 'Мерлин')
];

play(players);
