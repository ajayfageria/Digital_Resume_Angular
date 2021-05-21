import { Component, Input, OnInit } from '@angular/core';
import { EmploymentHistory } from 'src/app/models/employment-history';

@Component({
  selector: 'app-template-employment-history',
  templateUrl: './template-employment-history.component.html',
  styleUrls: ['./template-employment-history.component.css']
})
export class TemplateEmploymentHistoryComponent implements OnInit {
  @Input() employmentHistory!: EmploymentHistory;
  constructor() { }

  ngOnInit(): void {
  }

}
