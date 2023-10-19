import { Component, OnInit } from '@angular/core';  
import { DiagnosisService } from './diagnosis.service';
import { DiagnosI } from './models/diagnos.interface';
import { BehaviorSubject } from 'rxjs';
    
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: [ './app.component.scss' ]
})  
export class AppComponent {
  cardType = 'icpc2';

  constructor() {}  
}