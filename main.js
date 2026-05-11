"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Units_1 = require("./Units");
var Decorators_1 = require("./Decorators");
function createRandomUnit() {
    var baseClasses = [Units_1.Warrior, Units_1.Archer, Units_1.Wizard];
    var RandomBase = baseClasses[Math.floor(Math.random() * baseClasses.length)]; //случ выбор юнита
    var unit = new RandomBase();
    var decoratorTypes = [Decorators_1.Fire, Decorators_1.Frost, Decorators_1.Poison];
    var RandomDecorator = decoratorTypes[Math.floor(Math.random() * decoratorTypes.length)]; //случ эффект 
    return new RandomDecorator(unit);
}
console.log("Генератор случайных юнитов");
for (var i = 0; i < 5; i++) {
    var unit = createRandomUnit(); //генерирует 5 юнитов
    console.log("".concat(i + 1, ". ").concat(unit.getDescription()));
}
