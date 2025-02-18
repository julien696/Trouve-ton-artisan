import { Component, OnInit, inject } from '@angular/core';
import { Artisan } from '../../model/artisan.model';
import { CommonModule } from '@angular/common';
import { ArtisanService } from '../../services/artisan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisanCardComponent } from '../../component/artisan-card/artisan-card.component';


@Component({
  selector: 'app-artisan',
  imports: [CommonModule, ArtisanCardComponent],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.css'
})

export class ArtisanComponent implements OnInit {
  
  artisan : Artisan | undefined;
 

  artisanService = inject(ArtisanService);
  route = inject(ActivatedRoute);
  router = inject(Router)

  ngOnInit(): void {

      this.route.paramMap.subscribe(params =>{
        const id = +(params.get('id')!);
      
        this.artisanService.getArtisanById(id).subscribe(
      data => {
        if(data){
          this.artisan = data
        }else{
          this.router.navigate(['/404'])
        }
      }
    )
    })  
  }
}
