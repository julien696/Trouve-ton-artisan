import { Injectable } from '@angular/core';
import { Artisan } from '../model/artisan.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private dataUrl = 'assets/datas.json'

  constructor(private http: HttpClient) { }

  getArtisans() : Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.dataUrl)
  }
}
