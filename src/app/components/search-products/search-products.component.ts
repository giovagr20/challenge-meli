import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItems } from 'src/app/models/searchItem';
import { MeliApiService } from 'src/app/services/meli-api.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit, OnDestroy {

  item: string = ''
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  keyUp(event: any) {
    this.item = event.target.value;
  }

  searchItem(item: string) {
    this.router.navigate(['/items'], {queryParams: {search: item}})
  }

}
