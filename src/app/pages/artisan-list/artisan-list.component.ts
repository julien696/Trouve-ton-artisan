import { Component, inject, OnInit } from '@angular/core';
import { Artisan } from '../../model/artisan.model';
import { ArtisanService } from '../../services/artisan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilteredArtisanByCategoryPipe } from '../../pipes/filtered-artisan-by-category.pipe';
import { ArtisanCardComponent } from "../../component/artisan-card/artisan-card.component";
import { SearchPipe } from '../../pipes/search.pipe';


@Component({
  selector: 'app-artisan-list',
  imports: [CommonModule, FilteredArtisanByCategoryPipe, ArtisanCardComponent, SearchPipe],
  templateUrl: './artisan-list.component.html',
  styleUrl: './artisan-list.component.css'
})

export class ArtisanListComponent implements OnInit {

  artisans: Artisan[] =[];
  category: string | null = '';
  searchTerm : string = '';
  

  artisanService = inject(ArtisanService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data; console.log(this.artisans)
    });

    this.route.queryParams.subscribe(params =>{
      this.searchTerm = params['search'] || ''
    });
    
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      
    });
  }
 
}


