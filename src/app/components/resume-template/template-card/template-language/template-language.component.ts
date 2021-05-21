import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';

@Component({
  selector: 'app-template-language',
  templateUrl: './template-language.component.html',
  styleUrls: ['./template-language.component.css']
})
export class TemplateLanguageComponent implements OnInit {
  @Input() language!: Language;
  constructor() { }

  ngOnInit(): void {
  }

}
