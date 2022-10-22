import { Component, Input, OnInit } from '@angular/core';
import { Ami } from '../../model/ami.model';

@Component({
  selector: 'app-ami',
  templateUrl: './ami.component.html',
  styleUrls: ['./ami.component.scss']
})
export class AmiComponent implements OnInit {
  @Input() ami !: Ami

  constructor() { }

  onDetail(){}

  ngOnInit(): void {
  }

}
