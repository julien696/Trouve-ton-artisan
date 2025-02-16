import { Injectable } from '@angular/core';
import { Artisan } from '../model/artisan.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private dataUrl = 'assets/datas.json'

  constructor(private http: HttpClient) { }

  getArtisans() : Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.dataUrl)
  }
  
  getArtisanById(id: number): Observable<Artisan |undefined> {
    return this.getArtisans().pipe(
      map(artisans => artisans.find(artisan => artisan.id === id))
    )
  }
}
