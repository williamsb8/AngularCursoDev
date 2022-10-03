import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit, DoCheck {

  @Input() text = '';
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';
  @Input() priceSoles: number;
  @Input() priceDolar: number;
  @Input() priceEuro: number;

  constructor() {
    this.priceSoles = 0;
    this.priceDolar = 0;
    this.priceEuro = 0;
  }

  /* ngOnChanges(c: SimpleChanges): void {
    if (c.priceSoles && c.priceSoles.currentValue) {
      this.priceSoles = c.priceSoles.currentValue;
      this.priceDolar = this.priceSoles * this.getCurrentDolarFromApi();
      this.priceEuro = this.priceSoles * this.getCurrentEuroFromApi();
    }
  } */

  ngDoCheck(): void {
    this.priceDolar = this.priceSoles * this.getCurrentDolarFromApi();
    this.priceEuro = this.priceSoles * this.getCurrentEuroFromApi();
   /*  this.data.map( i => {
      i.isActive = true;
    });
    console.log(this.data); */
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  getCurrentDolarFromApi() {
    return 3.80;
  }

  getCurrentEuroFromApi() {
    return 4.75;
  }

}
