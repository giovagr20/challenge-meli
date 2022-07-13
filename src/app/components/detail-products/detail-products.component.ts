import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SearchItems } from 'src/app/models/searchItem';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {

  @Input() id: string = '';
  @Input() activeSearch: boolean = false;
  @Input() itemSearch: SearchItems = new SearchItems();
  @Input() itemId: string = '';
  @Input() descriptionItem: string = '';

  constructor() { }

  ngOnInit(): void {}

  goTo() {
    this.activeSearch = true;
  }
  

}
