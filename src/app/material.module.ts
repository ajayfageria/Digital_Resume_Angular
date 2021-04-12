import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

const moduleList = [MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule] 
@NgModule({
  imports: [
    moduleList
  ],
  exports: [
    moduleList
  ]
})
export class MaterialModule { }