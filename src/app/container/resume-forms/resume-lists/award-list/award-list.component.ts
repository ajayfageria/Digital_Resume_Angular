import { Component, Input, OnInit } from '@angular/core';
import { AwardsAchivement } from 'src/app/models/awards-achivement';

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css']
})
export class AwardListComponent implements OnInit {
  @Input() awardList!: AwardsAchivement[];
  constructor() { }

  ngOnInit(): void {
  }

}
