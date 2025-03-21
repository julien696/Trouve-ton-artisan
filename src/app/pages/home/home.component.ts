import { Component, inject, OnInit } from '@angular/core';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../model/artisan.model';
import { CommonModule } from '@angular/common';
import { FilteredArtisanByTopPipe } from '../../pipes/filtered-artisan-by-top.pipe';
import { ArtisanCardComponent } from '../../component/artisan-card/artisan-card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FilteredArtisanByTopPipe, ArtisanCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  
  artisans : Artisan[] = [];


  private artisanService = inject(ArtisanService);

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(artisans => {
      this.artisans = artisans
    })
  }
}
