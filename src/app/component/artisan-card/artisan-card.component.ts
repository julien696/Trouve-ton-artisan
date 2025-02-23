import { Component, Input } from '@angular/core';
import { Artisan } from '../../model/artisan.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artisan-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './artisan-card.component.html',
})
export class ArtisanCardComponent {

  @Input() artisan! : Artisan;
  @Input() mode: 'list' | 'artisan' = 'list'
}
