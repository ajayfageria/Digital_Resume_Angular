import { Component, Input, OnInit } from '@angular/core';
import { EmploymentHistory } from 'src/app/models/employment-history';

@Component({
  selector: 'app-employement-history-lists',
  templateUrl: './employement-history-lists.component.html',
  styleUrls: ['./employement-history-lists.component.css']
})
export class EmployementHistoryListsComponent implements OnInit {
  @Input() employmentHistoryList!: EmploymentHistory[];
  @Input() resumeId!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
