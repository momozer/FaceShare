import { Router } from '@angular/router';
import { FaceShareService } from './../services/face-share.service';
import { Component, OnInit, Input} from '@angular/core';
import { FaceShare } from '../model/face-share.model';

@Component({
  selector: 'app-share',
  templateUrl:'./share.component.html',
  styleUrls: ['./share.component.scss']
})

export class ShareComponent implements OnInit{
  @Input() faceShare !: FaceShare;
  buttonText !: string;

  constructor(private faceShareService : FaceShareService,
    private router : Router){};

  ngOnInit(){
    this.buttonText = "Oh share !"
    }

    onClickShare(){
     if (this.buttonText === "Oh share !") {
      this.faceShareService.shareFaceShareById(this.faceShare.id, "share");
      this.buttonText ="Oups, unShare !";
     } else {
      this.faceShareService.shareFaceShareById(this.faceShare.id, "unshare");
      this.buttonText = "Oh share !"
     }
    }

    onDetail(){
      this.router.navigateByUrl(`faceshare/${this.faceShare.id}`)
    }

    
}
