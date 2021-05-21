import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-button',
  templateUrl: './template-button.component.html',
  styleUrls: ['./template-button.component.css']
})
export class TemplateButtonComponent implements OnInit {
  @Input() resumeId!: string;
  @Input() isLeftPanelEnabled!: boolean;
  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }

  editResume() {
    this.router.navigate(['/dashboard/resume/edit/' + this.resumeId]);
  }

  editProfile() {
    this.router.navigate(['/dashboard/resume/edit/profile/' + this.resumeId]);
  }

}
