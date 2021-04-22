import { Component, Input, OnInit } from '@angular/core';
import { Refrence } from 'src/app/models/refrence';

@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.css']
})
export class ReferenceListComponent implements OnInit {
  @Input() referenceList!: Refrence[];
  constructor() { }

  ngOnInit(): void {
  }

}
