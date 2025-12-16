import { play } from './js/game.js';
import { Warrior } from './characters/Warrior.js';
import { Archer } from './characters/Archer.js';
import { Mage } from './characters/Mage.js';
import { Dwart } from './characters/Dwart.js';
import { Crossbowman } from './characters/Crossbowman.js';
import { Demourge } from './characters/Demourge.js';

const players = [
    new Warrior(0, 'Алёша Попович'),
    new Archer(5, 'Леголас'),
    new Mage(10, 'Гендальф'),
    new Dwart(15, 'Гимли'),
    new Crossbowman(20, 'Вильгельм Телль'),
    new Demourge(25, 'Мерлин')
];

play(players);