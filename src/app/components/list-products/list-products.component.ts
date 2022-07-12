import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SearchItems } from 'src/app/models/searchItem';
import { MeliApiService } from 'src/app/services/meli-api.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() itemSearch: SearchItems = new SearchItems();
  @Input() activeSearch: boolean = false;
  @Input('id') id: string = ''

  items!: SearchItems
  active: boolean = false;

  parameters!: string;

  constructor(private router: Router, 
    private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe(params => {
      this.parameters = params['search'];
    })

    console.log(this.parameters);
    
  }


  goTo(id: string) {
    this.active = true;
    this.activeSearch = false;
    this.id = id;

    this.router.navigate([`/items/${this.id}`])
  }
}
