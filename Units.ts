import { Unit } from "./Unit";

export class Warrior extends Unit {
    public getDescription(): string { return "воин"; }
    public getDamage(): number { return 15; }
}

export class Archer extends Unit {
    public getDescription(): string { return "лучник"; }
    public getDamage(): number { return 12; }
}

export class Wizard extends Unit {
    public getDescription(): string { return "маг"; }
    public getDamage(): number { return 10; }
}