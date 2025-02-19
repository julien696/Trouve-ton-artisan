import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../model/artisan.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(artisans: Artisan[], searchTerm: string): Artisan[] {
    if(!artisans || !searchTerm){
      return []
    }
    searchTerm = searchTerm.toLocaleLowerCase().trim()
    return artisans.filter(artisan =>
      artisan.name.toLocaleLowerCase().includes(searchTerm) || 
      artisan.location.toLocaleLowerCase().includes(searchTerm) ||
      artisan.specialty.toLocaleLowerCase().includes(searchTerm)
    ) 
  }
}
