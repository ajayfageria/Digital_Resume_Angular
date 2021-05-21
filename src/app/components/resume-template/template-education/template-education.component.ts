import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-template-education',
  templateUrl: './template-education.component.html',
  styleUrls: ['./template-education.component.css']
})
export class TemplateEducationComponent implements OnInit {
  @Input() education!: Education;
  constructor() { }

  ngOnInit(): void {
  }

}
