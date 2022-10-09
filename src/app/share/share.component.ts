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

  ngOnInit(){
    this.buttonText = "Oh share !"
    }

    onClickShare(){
     if (this.buttonText === "Oh share !") {
      this.faceShare.shares++;
      this.buttonText ="Oups, unShare !";
     } else {
      this.faceShare.shares--;
      this.buttonText = "Oh share !"
     }
    }

    
}
