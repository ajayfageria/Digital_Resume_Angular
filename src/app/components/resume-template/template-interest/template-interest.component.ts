import { Component, Input, OnInit } from '@angular/core';
import { Interest } from 'src/app/models/interest';

@Component({
  selector: 'app-template-interest',
  templateUrl: './template-interest.component.html',
  styleUrls: ['./template-interest.component.css']
})
export class TemplateInterestComponent implements OnInit {
  @Input() interest!: Interest;
  constructor() { }

  ngOnInit(): void {
  }

}
