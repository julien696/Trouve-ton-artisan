import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../model/artisan.model';

@Pipe({
  name: 'filteredArtisanByTop'
})
export class FilteredArtisanByTopPipe implements PipeTransform {

  transform(artisans : Artisan[], top : boolean ): Artisan [] {
    return artisans.filter(artisan => artisan.top === true)
  }

}
