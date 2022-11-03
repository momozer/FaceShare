import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceShare } from '../../model/face-share.model';
import { FaceShareService } from '../../services/face-share.service';

@Component({
  selector: 'app-face-share-list',
  templateUrl: './face-share-list.component.html',
  styleUrls: ['./face-share-list.component.scss']
})
export class FaceShareListComponent implements OnInit, OnDestroy {
  
  faceShares !: FaceShare[];
  private destroy$ !: Subject<boolean>;
  constructor(private faceShareService : FaceShareService) { }
  
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>;
    this.faceShares = this.faceShareService.getAllFaceShares();
    
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
      ).subscribe()   
  }
  
  ngOnDestroy() {
    this.destroy$.next(true)
    
  }
}
