import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Weakness } from 'src/app/models/weakness';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { WeaknessFormComponent } from '../../resume-dialogues/weakness-form/weakness-form.component';

@Component({
  selector: 'app-weakness-card',
  templateUrl: './weakness-card.component.html',
  styleUrls: ['./weakness-card.component.css']
})
export class WeaknessCardComponent implements OnInit {
  @Input() weakness!: Weakness;
  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(WeaknessFormComponent, {
      width: '90%', height: '90%', data: {weakness: this.weakness}
    });
  }

  delete() {
    this.apiService.deleteWeakness(this.weakness._id)
      .subscribe(data => {
        this.alertService.success('strength deleted Successfully');
      });
  }
}
