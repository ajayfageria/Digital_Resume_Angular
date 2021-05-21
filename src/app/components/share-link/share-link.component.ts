import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClipboardService } from 'ngx-clipboard';
import { Resume } from 'src/app/models/resume';
import { AlertService } from 'src/app/services/alertService';

@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.css']
})
export class ShareLinkComponent implements OnInit {
   resumeId: any;
   link!: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Resume,private clipboard: ClipboardService,private alertService: AlertService) {
    this.resumeId = this.data ? this.data : null;
    this.link = 'http://localhost:4200/dashboard/resume/preview/'+this.data._id;
   }

  ngOnInit(): void {
  }
  copy(){
      this.clipboard.copyFromContent(this.link);
      this.alertService.success("Link copied to clipboard");
  }

}
