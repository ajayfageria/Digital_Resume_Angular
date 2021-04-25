import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Strength } from 'src/app/models/strength';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { StrengthFormComponent } from '../../resume-dialogues/strength-form/strength-form.component';

@Component({
  selector: 'app-strength-card',
  templateUrl: './strength-card.component.html',
  styleUrls: ['./strength-card.component.css']
})
export class StrengthCardComponent implements OnInit {
  @Input() strength!: Strength;
  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(StrengthFormComponent, {
      width: '90%', height: '90%', data: {strength: this.strength}
    });
  }

  delete() {
    this.apiService.deleteStrength(this.strength._id)
      .subscribe(data => {
        this.alertService.success('strength deleted Successfully');
      });
  }
}
