import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-template-contact-detail',
  templateUrl: './template-contact-detail.component.html',
  styleUrls: ['./template-contact-detail.component.css']
})
export class TemplateContactDetailComponent implements OnInit,AfterContentInit {
  @Input() resume!: Resume;
  imageUrl = '';
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    this.imageUrl = this.resume.image_url ? this.resume.image_url : '../../../../assets/testimonial.png';
  }

}
