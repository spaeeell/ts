import { Unit } from "./Unit";
import { Warrior, Archer, Wizard } from "./Units";
import { Fire, Frost, Poison } from "./Decorators";

function createRandomUnit(): Unit {

    const baseClasses = [Warrior, Archer, Wizard];
    const RandomBase = baseClasses[Math.floor(Math.random() * baseClasses.length)];   //случ выбор юнита
    let unit: Unit = new RandomBase();

    const decoratorTypes = [Fire, Frost, Poison];
    const RandomDecorator = decoratorTypes[Math.floor(Math.random() * decoratorTypes.length)];    //случ эффект 
    
    return new RandomDecorator(unit);
}

console.log("Генератор случайных юнитов");
for (let i = 0; i < 5; i++) {
    const unit = createRandomUnit();                                                   //генерирует 5 юнитов
    console.log(`${i + 1}. ${unit.getDescription()}`);
}