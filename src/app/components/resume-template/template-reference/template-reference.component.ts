import { Component, Input, OnInit } from '@angular/core';
import { Refrence } from 'src/app/models/refrence';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {
  @Input() reference!: Refrence;
  constructor() { }

  ngOnInit(): void {
  }

}
