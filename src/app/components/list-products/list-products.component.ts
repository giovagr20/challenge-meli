import { Component, Input, OnInit } from '@angular/core';
import { MeliApiService } from 'src/app/services/meli-api.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() itemSearch: string = '';
  @Input() activeSearch: boolean = false;

  constructor(private serviceApi: MeliApiService) { }

  ngOnInit(): void {
  }

  getItems() {
    this.serviceApi.getItems(this.itemSearch)
    .subscribe((e) => {
      console.log(e)
    },
    (error) => {
      this.errorHanble(error)
    })
  }

  errorHanble(error: any) {
    console.log(error);
  }
}
