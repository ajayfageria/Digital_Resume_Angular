import { Component, Input, OnInit } from '@angular/core';
import { Strength } from 'src/app/models/strength';

@Component({
  selector: 'app-strength-list',
  templateUrl: './strength-list.component.html',
  styleUrls: ['./strength-list.component.css']
})
export class StrengthListComponent implements OnInit {
  @Input() strengthList!: Strength[];
  @Input() resumeId!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
