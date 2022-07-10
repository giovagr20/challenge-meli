import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  @Input('itemSearch') itemSearch: string = '';
  @Input('activeSearch') activeSearch: boolean = false;
  item: string = '';

  constructor( ) { }

  ngOnInit(): void {
  }

  keyUp(event:any) {
    this.item = event.target.value;
  }

  searchProduct() {
    this.activeSearch = true;
  }

}
