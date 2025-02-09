import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  menuOpen = false;
  searchBarOpen = false;
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }

  closeMenu() {
    this.menuOpen = false
  }

  searchBar() {
    this.searchBarOpen = !this.searchBarOpen
  }

}
