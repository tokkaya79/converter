import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { currencies as data } from './data/currencies';
import { ICurrency } from './models/currency';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    
})
export class AppComponent implements OnInit {
    title = 'converter';
    // currencies: ICurrency[] = data;
    loading = false;
    currencies$: Observable<ICurrency[]>

    @Input() currency: ICurrency[];
    currenciesService: any;

ngOnInit(): void { 
    this.loading = true
    this.currencies$ = this.currenciesService.getAll().pipe(tap(() => {return this.loading = false}))
   
}

}
