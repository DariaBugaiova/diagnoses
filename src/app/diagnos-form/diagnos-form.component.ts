import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DiagnosI } from '../models/diagnos.interface';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_DATE_FORMATS } from '../models/date-format';
import { DiagnosisService } from '../diagnosis.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-diagnos-form',
  templateUrl: './diagnos-form.component.html',
  styleUrls: ['./diagnos-form.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }
  ]
})
export class DiagnosFormComponent implements OnInit {
  @Input() cardType!: string;

  diagnoses!: DiagnosI[];
  events: string[] = [];
  showJSON: boolean = false;

  status!: string;
  errorMessage!: string;
  requestValid!: boolean;

  periodOptions: Array<string> = [];

  diagnosesForm!: FormGroup;

  constructor(private fb: FormBuilder, private diagnosisService: DiagnosisService) {}

  ngOnInit(): void {
    this.getDiagnoses();
    this.createForm();
  }

  get today() { return new Date() }

  get selects() : FormArray {  
    return <FormArray>this.diagnosesForm.controls['selects'];  
  }  

  get nameDiagnoses() {
    return this.diagnoses.map((item: any) => {
      return {'name': item.name, 'id': item.id, 'code': item.code } 
    } );
  }

  createForm() {
    this.diagnosesForm = new FormGroup({  
      date: new FormControl(''),
      selects: new FormArray([ new FormGroup({
        name: new FormControl(''),
        comment: new  FormControl('')
      })]),  
    }); 
  }

    getDiagnoses(): void {
      this.diagnosisService.getDiagnosisList(this.cardType, true)
        .subscribe(
          (data: DiagnosI[]) => {
            this.diagnoses = data;
            if (this.status === "404" || this.status === "Error") {
              this.errorMessage = "Invalid Pincode " + this.cardType + "! Enter a valid one."
              this.requestValid = false;
            }
            else {
              this.errorMessage = "";
              this.requestValid = true;
            }
          },
          (error: Error) => {
            this.errorMessage = "Unexpected Error Occurred!";
            this.requestValid = false;
          }
        );
    }

  addDiagnoses() {  
    const control = <FormArray>this.diagnosesForm.controls['selects'];
    control.push(
      new FormGroup({
        name: new FormControl(''),
        comment: new FormControl('')
      })
    )
  }

  onSelect(i: string) {
    this.periodOptions = [];

    if (i) {
      this.diagnoses.map(res => {
        if(res.id === +i) {
          this.periodOptions.push(res.id + '');
        }
      });
    }
  } 

  addDate(type: string, event: MatDatepickerInputEvent<Date>) {
      this.events.push(`${type}: ${event.value}`);
    }   

  showJSONFormValue() {
      this.showJSON = true;
    }
  }