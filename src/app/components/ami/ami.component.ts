import { AmiService } from './../../services/ami.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ami } from '../../model/ami.model';

@Component({
  selector: 'app-ami',
  templateUrl: './ami.component.html',
  styleUrls: ['./ami.component.scss']
})

export class AmiComponent implements OnInit {
  @Input() ami !: Ami;
 
  
  constructor(private router : Router, 
   private amiService : AmiService) { };

   ngOnInit(): void {
   }
   
   onSupprimer(){
     this.amiService.supprimer(this.ami.id);
    }
    
    
    onDetail(){
      this.router.navigateByUrl(`amis/${this.ami.id}`);
    }

    
  }
  