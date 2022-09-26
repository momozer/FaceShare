import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  share !: string;
  home !: string;
  description !: string;

 

  ngOnInit(): void {
    this.share = OnclickShare;
    this.home = OnClickHome;
    this.description = onclickDescription;

  }

}
