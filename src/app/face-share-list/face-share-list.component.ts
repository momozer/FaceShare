import { Component, OnInit } from '@angular/core';
import { FaceShare } from '../model/face-share.model';
import { FaceShareService } from '../services/face-share.service';

@Component({
  selector: 'app-face-share-list',
  templateUrl: './face-share-list.component.html',
  styleUrls: ['./face-share-list.component.scss']
})
export class FaceShareListComponent implements OnInit {
  
  faceShares !: FaceShare[];
  constructor(private faceShareService : FaceShareService) { }

  ngOnInit(): void {
    this.faceShares = this.faceShareService.getAllFaceShares(); 
  }

}
