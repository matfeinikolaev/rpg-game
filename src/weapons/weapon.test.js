import { Weapon } from "./Weapon";
import {Arm} from "./Arm";
import {Axe} from "./Axe";
import {Bow} from "./Bow";
import {Knife} from "./Knife";
import {LongBow} from "./LongBow";
import {Staff} from "./Staff";
import {StormStaff} from "./StormStaff";
import {Sword} from "./Sword";

test('should change durability', () => {
    const weapon = new Weapon('sword', 100, 100, 10);
    weapon.takeDamage(10);
    expect(weapon.durability).toBe(90);
});

test('should take damage', () => {
    const weapon = new Weapon('sword', 100, 100, 10);
    weapon.takeDamage(10);
    expect(weapon.getDamage()).toBe(100);
});

test('should change durability on Arm', () => {
    const arm = new Arm();
    arm.takeDamage(1);
    expect(arm.durability).toBe(Infinity);
});

test('should assign attack correctly on axe', () => {
    const axe = new Axe();
    expect(axe.attack).toBe(27);
});

test('should break on zero durability', () => {
    const bow = new Bow();
    bow.takeDamage(200);
    expect(bow.isBroken()).toBe(true);
});

test('should assign init durability correctly', () => {
    const knife = new Knife();
    expect(knife.initDurability).toBe(300);
});

test('should assign range correctly', () => {
    const longBow = new LongBow();
    expect(longBow.range).toBe(4);
});

test('should return correct damage', () => {
    const staff = new Staff();
    staff.takeDamage(200);
    expect(staff.getDamage()).toBe(8);
});

test('should return correct name', () => {
    const stormStaff = new StormStaff();
    expect(stormStaff.name).toBe('Посох Бури');
});

test('should return correct damage', () => {
    const sword = new Sword();
    sword.takeDamage(400);
    expect(sword.getDamage()).toBe(12.5);
});
