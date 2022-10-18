import { Component, Input, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/models/currency';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  
})
export class ModalComponent implements OnInit{
    sum: number = 0
    currencies: ICurrency[] = []
    loading = false
    result: number = 0
    


  @Input()
    title= 'title'
 

  constructor(private currenciesService: CurrenciesService) {}


 ngOnInit(): void {
    this.loading = true
     this.currenciesService.getAll().subscribe(currencies => {
            this.currencies = currencies
            this.loading = false
        })
 }



}

// [value]="sum/currencies[25].rate | number: '2.2-3'"