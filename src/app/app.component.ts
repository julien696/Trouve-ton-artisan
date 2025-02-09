import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ArtisanComponent } from "./pages/artisan/artisan.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ArtisanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Trouve-ton-artisan';
}
