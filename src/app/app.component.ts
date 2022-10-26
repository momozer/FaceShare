import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$ !: Observable<string>;
  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? `je suis ${value} et je suis un nombre pair` : `Je suis ${value} et je suis un nombre impair`)
    );



  }
}
