import { CurrencyService } from "../service/CurrencyService";
import { ChangeBehavior } from "../models/ChangeBehavior";
import { Currency } from "../models/Currency";

export class Dashboaord{
    currency : Currency[];
    currencyService : CurrencyService;
    el:HTMLTableElement;
    constructor(public target:string, public soruceURL:string){
        this.currencyService = new CurrencyService(soruceURL);
        this.el = document.getElementById(target) as HTMLTableElement;
        this.init();
    }

    private async init(){
        this.currency = await this.currencyService.getAll();
        this.render();
    }

    private render():void{
        let rows:string[] = [];
        this.currency.forEach(item=>
            rows.push(
                `<tr>
                    <td class= "has-text-centered" style="width:60px;">
                        <i class="flag-icon flag-icon-${item.country.code}"></i>
                    </td>
                    <td>${item.country.nombre}</td>
                    <td class="has-text-right" style="width:100px;">
                        ${item.valueToMoneyFormat}
                    </td>
                    <td class="has-text-centered ${item.behavior === ChangeBehavior.down ? 'has-text-danger' : ''}" style="width:60px;">
                        <i class="fas fa-caret-${item.behavior === ChangeBehavior.up ? 'up' : 'down'} fa-2x"></i>
                </tr>`                
            ));
            this.el.querySelector('tbody').innerHTML = rows.join('');
    }
}

