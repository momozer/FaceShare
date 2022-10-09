import { Component, OnInit } from '@angular/core';
import { FaceShare } from './model/face-share.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myShare !: FaceShare;
  myOtherShare !: FaceShare;
  myLastShare !: FaceShare;
  ngOnInit() {
    this.myShare = new FaceShare(
      "Ariless",
      "Mon camarade de classe au collége !",
      new Date(),
       0,
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
    );
  }
}
