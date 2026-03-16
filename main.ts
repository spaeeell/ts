// //чтобы запустить написать в консоли node main.js


class Visa {
    private _country: string;
    private _isValid: boolean;
    private _year: number;


    constructor() {
        this._country =  ["Арстоцка", "Колечия", "Орбистан"][ Math.floor(Math.random() * 3)]!; 
        this._isValid = Boolean (Math.floor(Math.random() * 2));
        this._year = Math.floor(Math.random() * (2050 - 2000 + 1) + 2000);
    }

    public get country():string {
        return this._country
    };
    public get isValid():boolean {
        return this._isValid
    };
    public get year():number {
        return this._year
    };

    ShowInfo():void {
        console.log(this.country, this.isValid, this.year);
    }

}
class BorderGuard {
    public CheckVisa(visa:Visa):string {
        if(visa.country == "Колечия" )
            return "Враждебная страна"
        if(visa.isValid == false) 
            return "ПОДДЕЛКА"
        if(visa.year - 2026 || 2026 - visa.year > 5 )
            return "Некорректный год выпуска";

    return "Въезд разрешен"
    }
}

function Main(): void {
    console.log("-----ПРОВЕРКА ДОКУМЕНТОВ-----");

    const Guard = new BorderGuard();
    const visas: Visa[] = [
        new Visa(),
        new Visa(),
        new Visa(),
    ];
    
    for(const visa of visas) {
        visa.ShowInfo();
        console.log(Guard.CheckVisa(visa));
    }
}

Main();
