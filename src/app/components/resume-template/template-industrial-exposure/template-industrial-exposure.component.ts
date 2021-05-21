import { Component, Input, OnInit } from '@angular/core';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';

@Component({
  selector: 'app-template-industrial-exposure',
  templateUrl: './template-industrial-exposure.component.html',
  styleUrls: ['./template-industrial-exposure.component.css']
})
export class TemplateIndustrialExposureComponent implements OnInit {
  @Input() industrialExposure!: IndustrialExposure;
  constructor() { }

  ngOnInit(): void {
  }

}
