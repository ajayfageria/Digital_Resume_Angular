import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/assets/utility';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  templates = Utility.Templates;
  constructor() { }

  ngOnInit(): void {
  }

}
