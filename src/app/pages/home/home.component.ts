import { Component, inject, OnInit } from '@angular/core';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../model/artisan.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  artisans : Artisan[] = [];


  artisanService = inject(ArtisanService);

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(artisans => {
      this.artisans = artisans
    })
  }
}
