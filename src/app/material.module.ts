import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {ProgressBarModule} from 'primeng/progressbar';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    BrowserModule,
    PanelModule,
    CardModule,
    DataViewModule,
    ButtonModule,
    StepsModule,
    MatSelectModule,
    MatSliderModule,
    ProgressBarModule,
    TableModule,
    ChartModule

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    CardModule,
    DataViewModule,
    ButtonModule,
    StepsModule,
    MatSelectModule,
    MatSliderModule,
    ProgressBarModule,
    TableModule,
    ChartModule
  ]
})
export class MaterialModule { }
