import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../model/artisan.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-artisan',
  imports: [CommonModule],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.css'
})

export class ArtisanComponent implements OnInit {
  artisans: Artisan[] = [];

  constructor (private artisanService : ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe((data) =>{
      this.artisans = data;
    })
  }
}
