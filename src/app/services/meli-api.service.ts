import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MeliApiService {

  private url: string = environment.apiUrlMeli;

  constructor(private http: HttpClient) { }

  getItems(searchItem: string): Observable<string> {
    const params = new HttpParams().set('q', searchItem);
    return this.http.get(`${this.url}sites/MLA/search`, {params})
    .pipe(map((response) => response as string));
  }
}