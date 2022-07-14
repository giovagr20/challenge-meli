import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SearchItems } from 'src/app/models/searchItem';
import Swal from 'sweetalert2';
import { MeliApiService } from 'src/app/services/meli-api.service';
import { ModelById } from 'src/app/models/models-by-id/model-by-id';
import { ModelDescriptionById } from 'src/app/models/models-by-id/model-description-by-id';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit, OnDestroy {

  item: string = ''
  activeTemp: boolean = false
  id: string = ''
  sub: any
  response!: ModelById
  active: boolean = false
  responseDescription!: ModelDescriptionById

  constructor(private route: ActivatedRoute, private apiService: MeliApiService) { }

  ngOnInit(): void {
    this.active = false
    this.sub = this.route.params.subscribe(params => {
      this.id = params['item']
    })

    this.getItemById(this.id)
    this.getDescriptionItemByid(this.id)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  getItemById(id: string) {
    this.apiService.getItemById(id).subscribe({
      next: (element) => {
        this.active = true
        this.response = element;
      },
      error: (error) => { 
        Swal.fire({
        title: 'Ha ocurrido un error',
        html: `Este es el error: ${error}`,
        icon: 'error'
      })
    }  
    })
  }

  getDescriptionItemByid(id: string) {
    this.apiService.getItemDescriptionById(id).subscribe({
      next: (element) => {
        this.responseDescription = element
      },
      error: (error) => Swal.fire({
        title: 'Ha ocurrido un error',
        html: `Este es el error: ${error}`,
        icon: 'error'
      })
    })
  }

  keyUp(event: any) {
    this.item = event.target.value
  }
}
