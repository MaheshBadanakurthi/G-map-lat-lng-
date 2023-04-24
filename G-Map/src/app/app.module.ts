import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiaGJoamhzIiwiYSI6ImNsNWo3ZGNhODBmODAzY3BqODhuejB3ZmoifQ.RqsEoPXFgDUq1mryoReotg'
    }),
    DynamicDialogModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
