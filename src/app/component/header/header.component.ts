import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../model/artisan.model';
import { FormsModule } from '@angular/forms' ;




@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  artisanService = inject(ArtisanService);
  router = inject(Router);

  artisans : Artisan[] = [];
  menuOpen : boolean = false;
  searchBarOpen : boolean = false;
  searchTerm : string ='';
 
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    window.scrollTo({top : 0})
  }

  searchBar() {
    this.searchBarOpen = !this.searchBarOpen
  }

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data =>{
      this.artisans = data
    })
  }

  searchArtisan(){
    if(this.searchTerm !== ''){
      this.router.navigate(['artisan-list/:category'], {queryParams : {search : this.searchTerm} })
    };
    this.searchTerm = '' 
  }
}

