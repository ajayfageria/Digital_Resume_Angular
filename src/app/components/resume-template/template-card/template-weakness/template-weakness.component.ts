import { Component, Input, OnInit } from '@angular/core';
import { Weakness } from 'src/app/models/weakness';

@Component({
  selector: 'app-template-weakness',
  templateUrl: './template-weakness.component.html',
  styleUrls: ['./template-weakness.component.css']
})
export class TemplateWeaknessComponent implements OnInit {
  @Input() weakness!: Weakness
  constructor() { }

  ngOnInit(): void {
  }

}
