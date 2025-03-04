import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Artisan } from '../../model/artisan.model';
import { ArtisanService } from '../../services/artisan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilteredArtisanByCategoryPipe } from '../../pipes/filtered-artisan-by-category.pipe';
import { ArtisanCardComponent } from "../../component/artisan-card/artisan-card.component";
import { SearchPipe } from '../../pipes/search.pipe';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-artisan-list',
  imports: [CommonModule, FilteredArtisanByCategoryPipe, ArtisanCardComponent, SearchPipe],
  templateUrl: './artisan-list.component.html',
})

export class ArtisanListComponent implements OnInit, OnDestroy {

  artisan: Artisan | undefined;
  artisans: Artisan[] =[];
  category: string | null = '';
  searchTerm : string = '';
  
  searchRouteSubscription : Subscription | null = null;
  categoryRouteSubscription : Subscription | null = null;

  private artisanService = inject(ArtisanService);
  private route = inject(ActivatedRoute);
  private router = inject(Router)
 

  ngOnInit(): void {
    
    this.artisanService.getArtisans().subscribe(data => this.artisans = data);

   this.searchRouteSubscription = this.route.queryParams.subscribe(params =>{
      this.searchTerm = params['search'] || ''
    });
        
    this.categoryRouteSubscription = this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      
    });
  }

  ngOnDestroy(): void {
    this.searchRouteSubscription?.unsubscribe();
    this.categoryRouteSubscription?.unsubscribe();
  }
 
}


