import { Text } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$ !: Observable<string>;
  ngOnInit() {
    
    
  }
}
