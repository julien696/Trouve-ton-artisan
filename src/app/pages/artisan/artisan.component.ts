import { Component, OnInit, inject } from '@angular/core';
import { Artisan } from '../../model/artisan.model';
import { CommonModule } from '@angular/common';
import { ArtisanService } from '../../services/artisan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisanCardComponent } from '../../component/artisan-card/artisan-card.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-artisan',
  imports: [CommonModule, ArtisanCardComponent, ReactiveFormsModule],
  templateUrl: './artisan.component.html',
})

export class ArtisanComponent implements OnInit {
  
  artisan : Artisan | undefined;
  contactForm : FormGroup;
 

  private artisanService = inject(ArtisanService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(1)]],
      lastName : ['', [Validators.required, Validators.minLength(1)]],
      email : ['',[Validators.required, Validators.email]],
      message : ['',[Validators.required]]
       });
      }


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
          });
        })  
      };
      

    onSubmit() : void {
      if(this.contactForm.valid){
        alert('Message envoyé');
        this.contactForm.reset();
      }
    }

  }
  
      
