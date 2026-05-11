var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StandartPizza = /** @class */ (function () {
    function StandartPizza() {
    }
    StandartPizza.prototype.description = function () {
        return "нормал пицца ";
    };
    StandartPizza.prototype.price = function () {
        return 350;
    };
    return StandartPizza;
}());
var PizzaDecorator = /** @class */ (function () {
    function PizzaDecorator(pizza) {
        this.pizza = pizza;
    }
    PizzaDecorator.prototype.description = function () {
        return this.pizza.description();
    };
    PizzaDecorator.prototype.price = function () {
        return this.pizza.price();
    };
    return PizzaDecorator;
}());
var Cheese = /** @class */ (function (_super) {
    __extends(Cheese, _super);
    function Cheese() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cheese.prototype.description = function () {
        return _super.prototype.description.call(this) + "с сыром ";
    };
    Cheese.prototype.price = function () {
        return _super.prototype.price.call(this) + 100;
    };
    return Cheese;
}(PizzaDecorator));
var sausage = /** @class */ (function (_super) {
    __extends(sausage, _super);
    function sausage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sausage.prototype.description = function () {
        return _super.prototype.description.call(this) + "с колбаской ";
    };
    sausage.prototype.price = function () {
        return _super.prototype.price.call(this) + 200;
    };
    return sausage;
}(PizzaDecorator));
var mushroom = /** @class */ (function (_super) {
    __extends(mushroom, _super);
    function mushroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mushroom.prototype.description = function () {
        return _super.prototype.description.call(this) + "с грибами ";
    };
    mushroom.prototype.price = function () {
        return _super.prototype.price.call(this) + 150;
    };
    return mushroom;
}(PizzaDecorator));
var customPizza = new Cheese(new sausage(new mushroom(new StandartPizza)));
console.log(customPizza.description());
