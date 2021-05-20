import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.css']
})
export class TemplateCardComponent implements OnInit {
  @Input() template: any;
  @Input() resumeId: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openTemplate() {
       this.router.navigate(['dashboard', 'resume', 'template',
       this.resumeId, this.template.id]);
       }
}
