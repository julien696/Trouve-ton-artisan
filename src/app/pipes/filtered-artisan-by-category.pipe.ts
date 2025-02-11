import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../model/artisan.model';

@Pipe({
  name: 'filteredArtisanByCategory'
})
export class FilteredArtisanByCategoryPipe implements PipeTransform {

  transform(artisans: Artisan[], category : string | null): Artisan[] {
    if(!category) {
      return artisans
    }
    return artisans.filter(artisan => artisan.category === category)
  }

}
