import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})

export class ShareComponent implements OnInit{
  titre !: string;
  description !: string;
  dateCreation !: Date;
  shares !: number;
  imageURL !: string;

  ngOnInit(){
    this.titre = "Ariless";
    this.description = "Mon camarade de classe au collége !",
    this.dateCreation = new Date();
    this.shares = 6;
    this.imageURL = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    }
}
