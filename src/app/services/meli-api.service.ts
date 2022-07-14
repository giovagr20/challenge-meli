import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { SearchItems } from '../models/searchItem';
import { ModelById } from '../models/models-by-id/model-by-id';
import { ModelDescriptionById } from '../models/models-by-id/model-description-by-id';

@Injectable({
  providedIn: 'root'
})

export class MeliApiService {

  private url: string = environment.apiUrlMeli;

  constructor(private http: HttpClient) { }

  getItems(searchItem: string): Observable<SearchItems> {
    const params = new HttpParams().set('q', searchItem);
    return this.http.get(`${this.url}sites/MLA/search`, {params})
    .pipe(map((response) => response as SearchItems));
  }


  getItemById(id: string): Observable<ModelById> {
    return this.http.get(`${this.url}items/${id}`)
    .pipe(map((response) => response as ModelById))
  }

  getItemDescriptionById(id: string): Observable<ModelDescriptionById> {
    return this.http.get(`${this.url}items/${id}/description`)
    .pipe(map((response) => response as ModelDescriptionById))
  }

}
