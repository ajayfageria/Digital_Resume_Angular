import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.css']
})
export class TemplateCardComponent implements OnInit {
  @Input() template: any;
  constructor() { }

  ngOnInit(): void {
  }

}
