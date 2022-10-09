import { Component, OnInit } from '@angular/core';
import { FaceShare } from './model/face-share.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceShares !: FaceShare[];
 
  ngOnInit() {
    this.faceShares = [
      {
          title :"Ariless",
          description :"Mon camarade de classe au collége !",
          dateCreation:  new Date(),
           shares: 0,
          imageURL: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
          localisation : "Dans la forêt"
       },
       {
          title :"Symbôle",
          description :"Expliquer avec une image, c'est dire l'Innefable",
          dateCreation:  new Date(),
           shares: 0,
          imageURL: "https://th.bing.com/th/id/OIP.yBrEYf96NklICIizYm3k2gHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          localisation : "Dans la forêt"
       },
      {
          title :"BIM",
          description :"Tout nouveau voyage commence par un imprévu !",
          dateCreation:  new Date(),
           shares: 3,
          imageURL: "https://th.bing.com/th/id/OIP.-o_6izFFdorSGKrFePQANgHaEI?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          localisation : "Dans la forêt"
       }      
    ];
  }
}
