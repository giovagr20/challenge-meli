import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItems } from 'src/app/models/searchItem';
import { MeliApiService } from 'src/app/services/meli-api.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  @Input('itemSearch') itemSearch: SearchItems = new SearchItems();
  @Input('activeSearch') activeSearch: boolean = false;
  item: string = '';
  response: SearchItems = new SearchItems();

  constructor( private router: Router, private apiService: MeliApiService ) { }

  ngOnInit(): void {
  }

  keyUp(event:any) {
    this.item = event.target.value;
  }

  searchProduct() {
    this.activeSearch = true;

    this.router.navigate(['/items'], { queryParams: { search: `${this.item}` } });

    this.apiService.getItems(this.item).subscribe(
      {
        next: this.getItemsValue.bind(this)
      }
    )

  }

  getItemsValue(element: SearchItems) {
    this.response = element;
    this.itemSearch = this.response;
  }

}
