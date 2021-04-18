import { Language } from './../../../../models/language';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
  @Input() languagelist!: Language[];
  constructor() { }

  ngOnInit(): void {
  }

}
