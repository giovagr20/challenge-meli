import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  @Input('itemSearch') itemSearch: string = '';
  @Input('activeSearch') activeSearch: boolean = false;
  item: string = '';

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  keyUp(event:any) {
    this.item = event.target.value;
  }

  searchProduct() {
    this.activeSearch = true;

    this.router.navigate(['/items'], { queryParams: { search: `${this.item}` } });
  }

}
