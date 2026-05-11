import { Unit } from "./Unit";

abstract class UnitDecorator extends Unit {
    constructor(protected unit: Unit) {
        super();
    }
}

export class Fire extends UnitDecorator {
    private fireDamage: number = 10;

    public getDescription(): string {
        return `Огненный ${this.unit.getDescription()}, базовый урон ${this.unit.getDamage()} с дополнительным уроном от огня ${this.fireDamage}`;
    }
    public getDamage(): number {
        return this.unit.getDamage() + this.fireDamage;
    }
}

export class Frost extends UnitDecorator {
    private slowdown: number = 30;

    public getDescription(): string {
        return `Морозный ${this.unit.getDescription()}, базовый урон ${this.unit.getDamage()} с процентом замедления от эффекта заморозки ${this.slowdown}%`;
    }
    public getDamage(): number {
        return this.unit.getDamage();
    }
}

export class Poison extends UnitDecorator {
    private poisonDamage: number = 5;

    public getDescription(): string {
        return `Ядовитый ${this.unit.getDescription()}, базовый урон ${this.unit.getDamage()} с периодическим уроном от яда ${this.poisonDamage}`;
    }
    public getDamage(): number {
        return this.unit.getDamage() + this.poisonDamage;
    }
}