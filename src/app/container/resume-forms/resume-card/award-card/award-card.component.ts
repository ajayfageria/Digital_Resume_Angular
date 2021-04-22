import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { AwardFormComponent } from '../../resume-dialogues/award-form/award-form.component';

@Component({
  selector: 'app-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.css']
})
export class AwardCardComponent implements OnInit {
  @Input() award!: AwardsAchivement;
  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(AwardFormComponent, {
      width: '90%', height: '90%', data: {award: this.award}
    });
  }

  delete() {
    this.apiService.deleteAward(this.award._id)
      .subscribe(data => {
        this.alertService.success('Award deleted Successfully');
      });
  }
}
