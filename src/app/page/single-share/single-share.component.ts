import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FaceShare } from '../../model/face-share.model';
import { FaceShareService } from '../../services/face-share.service';

@Component({
  selector: 'app-single-share',
  templateUrl: './single-share.component.html',
  styleUrls: ['./single-share.component.scss']
})
export class SingleShareComponent implements OnInit {

  faceShare !: FaceShare;
  buttonText !: string;

  constructor(private faceShareService : FaceShareService,
    private route : ActivatedRoute){};

  ngOnInit(){
    this.buttonText = "Oh share !";
    const faceShareId = +this.route.snapshot.params['id'];    
    this.faceShare = this.faceShareService.getFaceShareById(faceShareId);
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

   


}
