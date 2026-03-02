class Visa {
    private _country: string;
    private _isValid: boolean;
    private _year: number;

    constructor() {
        const countries = ["Арстоцка", "Колечия", "Орбистан"];
        const randomIndex = Math.floor(Math.random() * countries.length);
        this._country = countries[randomIndex]!;
        this._isValid = Math.random() < 0.5;
        this._year = Math.floor(Math.random() * (2050 - 2000 + 1)) + 2000;
    }

    get Country(): string { return this._country; }
    get IsValid(): boolean { return this._isValid; }
    get Year(): number { return this._year; }

    ShowInfo(): void {
        console.log(`Страна: ${this._country}, Валидна: ${this._isValid}, Год: ${this._year}`);
    }
}

class BorderGuard {
    public CheckVisa(visa: Visa): string {
        if (visa.Country !== "Арстоцка" && visa.Country !== "Орбистан") {
            return "Враждебная страна";
        }

        if (!visa.IsValid) {
            return "ПОДДЕЛКА!";
        }

        if (Math.abs(visa.Year - 2026) > 5) {
            return "Некорректный год выпуска";
        }

        return "Въезд разрешен";
    }
}

const guard = new BorderGuard();
const visas: Visa[] = [new Visa(), new Visa(), new Visa()];

visas.forEach((v, index) => {
    console.log(`--- Проверка визы №${index + 1} ---`);
    v.ShowInfo();
    console.log("Результат: " + guard.CheckVisa(v));
});
