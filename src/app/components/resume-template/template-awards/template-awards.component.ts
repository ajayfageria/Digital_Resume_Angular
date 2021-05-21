import { Component, Input, OnInit } from '@angular/core';
import { AwardsAchivement } from 'src/app/models/awards-achivement';

@Component({
  selector: 'app-template-awards',
  templateUrl: './template-awards.component.html',
  styleUrls: ['./template-awards.component.css']
})
export class TemplateAwardsComponent implements OnInit {
  @Input() award!: AwardsAchivement;
  constructor() { }

  ngOnInit(): void {
  }

}
