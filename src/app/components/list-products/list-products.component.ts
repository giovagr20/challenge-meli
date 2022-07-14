import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SearchItems } from 'src/app/models/searchItem';
import { MeliApiService } from 'src/app/services/meli-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit, OnDestroy {
  itemSearch: SearchItems = new SearchItems();
  activeSearch: boolean = false;
  item: string = '';
  param: string = '';
  sub: any;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private apiService: MeliApiService
  ) {}

  ngOnInit(): void {
    
    this.activeSearch = false
    this.sub = this.activateRouter.queryParams.subscribe(params => {
      this.param = params['search']
    })

    console.log(this.param);
    
    if (this.param === '') {
      Swal.fire('Por favor ingresa parametro de busqueda')
      this.activeSearch = true
    } else {
      this.searchItem(this.param)
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  keyUp(event: any) {
    this.item = event.target.value;
  }

  searchItem(item: string) {
    this.activeSearch = false
    this.router.navigate(['/items'], {queryParams: {search: item}})

    this.apiService.getItems(item).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    })
  }

  handleResponse(element: SearchItems) {    
    this.itemSearch = element
    this.activeSearch = true
  }

  handleError(error: any) {
    alert(`Ha ocurrido un error ${error}`)
  }
}
