import { FaceShare } from './../model/face-share.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FaceShareService {
  faceShares : FaceShare[] = [
    {
        id : 1,
        title :"Ariless",
        description :"Mon camarade de classe au collége !",
        dateCreation:  new Date(),
        shares: 0,
        imageURL: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        localisation : "Dans la forêt"
     },
     {
        id : 2,
        title :"Symbôle",
        description :"Expliquer avec une image, c'est dire l'Innefable",
        dateCreation:  new Date(),
        shares: 0,
        imageURL: "https://th.bing.com/th/id/OIP.yBrEYf96NklICIizYm3k2gHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        localisation : "Dans la forêt"
     },
    {
        id : 3,
        title :"BIM",
        description :"Tout nouveau voyage commence par un imprévu !",
        dateCreation:  new Date(),
        shares: 3,
        imageURL: "https://th.bing.com/th/id/OIP.-o_6izFFdorSGKrFePQANgHaEI?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        localisation : "Dans la forêt"
     }      
  ];

  getAllFaceShares(): FaceShare[] {
    return this.faceShares;
  }

  getFaceShareById(faceShareid: number): FaceShare {
    const faceShare = this.faceShares.find(faceShare => faceShareid === faceShareid);
    if(!faceShare){
      throw new Error("FaceShare non existant");
    }else{
      return faceShare;
    }
  }

  shareFaceShareById(faceShareid: number, shareType : "share" | "unshare" ) : void {
    const faceShare = this.getFaceShareById(faceShareid);
    shareType === "share" ? faceShare.shares++ : faceShare.shares--;
}
  unshareFaceShareById(faceShareid: number) : void {
    const faceShare = this.faceShares.find(faceShare => faceShareid === faceShareid);
    if (faceShare) {
      faceShare.shares--;
  }else{
    throw new Error("FaceShare non existant");    
  }
}

  constructor() { }
}
