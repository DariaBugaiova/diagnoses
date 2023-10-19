import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DatePickerFormatDirective } from './date-picker-format.directive';
import { DiagnosisService } from './diagnosis.service';
import { HttpClientModule } from '@angular/common/http';
import { DiagnosFormComponent } from './diagnos-form/diagnos-form.component';
import { createJSONFormValuePipe } from './pipes/json-from-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerFormatDirective,
    DiagnosFormComponent,
    createJSONFormValuePipe,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatInputModule, 
    MatSelectModule,
    HttpClientModule,
    ],
  providers: [DiagnosisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
