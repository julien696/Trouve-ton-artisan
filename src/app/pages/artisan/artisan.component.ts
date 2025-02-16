import { Component, OnInit, inject } from '@angular/core';
import { Artisan } from '../../model/artisan.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';


@Component({
  selector: 'app-artisan',
  imports: [CommonModule],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.css'
})

export class ArtisanComponent {
  artisans : Artisan[] = []

  artisanService = inject(ArtisanService);

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(artisans => {
      this.artisans = artisans
    })
  }  
}
