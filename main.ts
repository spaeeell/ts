class Visa{
    private _country: string;
    private _isValid: boolean;
    private _year: number;

    constructor(){
        const countries = ["Арстоцка", "Колечия", "Орбистан"];
        const randomIndex = Math.floor(Math.random() * countries.length);
        this._country = countries[randomIndex]!;

        this._isValid = Math.random() < 0.5;

        this._year = Math.floor(Math.random()* (2050 - 2000 + 1))+ 2000;
    }

    get Country(): string{
        return this._country
    }

    get IsValid(): boolean{
        return this._isValid
    }

    get Year(): number{
        return this._year
    }

    
    ShowInfo(): void{
        console.log(this._country);
        console.log(this._isValid);
        console.log(this._year);
    }
}

class BorderGuard{
    public CheckVisa(visa : Visa): string{
        if(visa.Country != "Арстоцка" && visa.Country != "Орбистан"){
            return "Враждебная страна";
        } 

        if(visa.IsValid == false){
            return "ПОДДЕЛКА!";
        }

        if(visa.Year - 2026 || 2026 - visa.Year > 5){
            return "Некорректный год выпуска";
        } else {
            return "Въезд разрешен";
        }
    }

    public Main(){
        const border = new BorderGuard();

        const visas: Visa[] = [
            new Visa(),
            new Visa(),
            new Visa(),
        ];

        for(const visa of visas) {
            visa.ShowInfo();
            const result = border.CheckVisa(visa);
            console.log("Результат проверки: " + result);
        }
    }
}