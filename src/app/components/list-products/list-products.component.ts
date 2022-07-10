import { Component, Input, OnInit } from '@angular/core';
import { SearchItems } from 'src/app/models/searchItem';
import { MeliApiService } from 'src/app/services/meli-api.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() itemSearch: string = '';
  @Input() activeSearch: boolean = false;

  @Input('id') id: string = ''

  items!: SearchItems
  active: boolean = false;

  constructor(private serviceApi: MeliApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges()	{
    this.getItems()
  }

  ngOnDestroy() {
    this.itemSearch = '';
  }

  getItems() {
    this.serviceApi.getItems(this.itemSearch)
    .subscribe({
      next: this.initHandle.bind(this),
      error: this.errorHandle.bind(this)
    })
  } 
  errorHandle(error: any) {
    console.log(error);
  }

  initHandle(element: any) {
    this.items = element;    
  }

  goTo(id: string) {
    this.active = true;
    this.activeSearch = false;
    this.id = id;
  }


}
