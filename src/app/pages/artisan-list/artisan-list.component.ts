import { Component, inject, OnInit } from '@angular/core';
import { Artisan } from '../../model/artisan.model';
import { ArtisanService } from '../../services/artisan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisan-list',
  imports: [CommonModule],
  templateUrl: './artisan-list.component.html',
  styleUrl: './artisan-list.component.css'
})

export class ArtisanListComponent implements OnInit {

  artisans: Artisan[] =[];
  filteredArtisansByCategory: Artisan[] = [];
  category: string | null = '';
  validCategory: string[] = ['Bâtiment','Fabrication','Services','Alimentation']

  artisanService = inject(ArtisanService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
    
      if( this.category && !this.validCategory.includes(this.category)) {
        this.router.navigate(['/404']);
        return
      }  
      
      this.loadArtisans();
    });
  }

    loadArtisans(): void{
      this.artisanService.getArtisans().subscribe(artisans => {
        this.artisans = artisans;
      })
    }
  }


