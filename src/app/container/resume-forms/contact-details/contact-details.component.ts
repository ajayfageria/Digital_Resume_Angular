import { ContactDetailFormComponent } from '../resume-dialogues/contact-detail-form/contact-detail-form.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact, Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contactDetails!: Contact;
  @Input() resumeId: string='';
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  openContactForm(){
  this.matDialog.open(ContactDetailFormComponent,{
    width: '90%',height: '90%',data: {contactDetails: this.contactDetails, resumeId: this.resumeId}
  }
    )
  }
}
