import { Component, Input, OnInit } from '@angular/core';
import { Interest } from 'src/app/models/interest';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.css']
})
export class InterestListComponent implements OnInit {
  @Input() interestList!: Interest[];
  constructor() { }

  ngOnInit(): void {
  }

}
