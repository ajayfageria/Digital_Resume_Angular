import { Component, Input, OnInit } from '@angular/core';
import { Strength } from 'src/app/models/strength';

@Component({
  selector: 'app-template-strength',
  templateUrl: './template-strength.component.html',
  styleUrls: ['./template-strength.component.css']
})
export class TemplateStrengthComponent implements OnInit {
  @Input() strength!: Strength;
  constructor() { }

  ngOnInit(): void {
  }

}
