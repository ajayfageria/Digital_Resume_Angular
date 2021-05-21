import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent implements AfterContentInit {

  @Input() resume!: Resume;
  videoUrl: any = '';

  constructor(private domSanatizer: DomSanitizer) {
  }

  ngAfterContentInit() {
    if (this.resume.video_url) {
      const id = this.resume.video_url.split('v=')[1];
      const url = 'https://www.youtube.com/embed/' + id;
      this.videoUrl = this.domSanatizer
        .bypassSecurityTrustResourceUrl(url);
    }
  }

}
