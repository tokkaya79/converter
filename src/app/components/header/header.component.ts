import { Component, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/models/currency';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    currencies: ICurrency[] = []

    constructor(private currenciesService: CurrenciesService) {

    }
    ngOnInit(): void {
        this.currenciesService.getAll().subscribe(currencies => {
            this.currencies = currencies
        })
    }

}
