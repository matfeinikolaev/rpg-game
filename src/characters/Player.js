import { Arm } from '../weapons/Arm.js';
import { Knife } from '../weapons/Knife.js';

export class Player {
    constructor(position, name) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm();
        this.position = position;
        this.name = name;
    }

    getLuck() {
        return (Math.random() * 100 + this.luck) / 100;
    }

    getDamage(distance) {
        if (distance > this.weapon.range) return 0;
        return (this.attack + this.weapon.getDamage()) * this.getLuck() / distance;
    }

    takeDamage(damage) {
        this.life = Math.max(0, this.life - damage);
    }

    isDead() {
        return this.life === 0;
    }

    moveLeft(distance) {
        const actualDistance = Math.min(distance, this.speed);
        this.position -= actualDistance;
    }

    moveRight(distance) {
        const actualDistance = Math.min(distance, this.speed);
        this.position += actualDistance;
    }

    move(distance) {
        if (distance < 0) {
            this.moveLeft(Math.abs(distance));
        } else {
            this.moveRight(distance);
        }
    }

    isAttackBlocked() {
        return this.getLuck() > (100 - this.luck) / 100;
    }

    dodged() {
        return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
    }

    takeAttack(damage) {
        if (this.isAttackBlocked()) {
            this.weapon.takeDamage(damage);
        } else if (!this.dodged()) {
            this.takeDamage(damage);
        }
    }

    checkWeapon() {
        if (this.weapon.isBroken()) {
            if (this.weapon instanceof Knife) {
                this.weapon = new Arm();
            } else {
                this.weapon = new Knife();
            }
        }
    }

    tryAttack(enemy) {
        const distance = Math.abs(this.position - enemy.position) || 1;
        if (this.weapon.range < distance) return;
        
        this.weapon.takeDamage(10 * this.getLuck());
        const damage = this.getDamage(distance);
        
        if (this.position === enemy.position) {
            enemy.position += 1;
            enemy.takeAttack(damage * 2);
        } else {
            enemy.takeAttack(damage);
        }
    }

    chooseEnemy(players) {
        const enemies = players.filter(p => p !== this && !p.isDead());
        return enemies.reduce((min, p) => p.life < min.life ? p : min, enemies[0]);
    }

    moveToEnemy(enemy) {
        const direction = enemy.position > this.position ? 1 : -1;
        this.move(direction * this.speed);
    }

    turn(players) {
        const enemy = this.chooseEnemy(players);
        if (enemy) {
            this.moveToEnemy(enemy);
            this.tryAttack(enemy);
        }
    }
}