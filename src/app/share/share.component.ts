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

  ngOnInit(){
    this.titre = "Ariless";
    this.description = "Mon camarade de classe au collége !",
    this.dateCreation = new Date();
    this.shares = 6;
    }
}
