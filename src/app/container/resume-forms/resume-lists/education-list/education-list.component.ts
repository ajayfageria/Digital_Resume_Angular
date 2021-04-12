import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  @Input() educationList!: Education[];
  constructor() { }

  ngOnInit(): void {
  }

}
