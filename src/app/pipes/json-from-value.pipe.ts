import { Pipe, PipeTransform } from '@angular/core';
import { DiagnosI } from '../models/diagnos.interface';

export interface formDiagnosI {
    date: string,
    selects: [
        { 
        'name': string,
        'comment': string
    }
    ]
}

@Pipe({ name: 'createJSONFormValue' })
export class createJSONFormValuePipe implements PipeTransform {
  transform(value: formDiagnosI, diagnoses: DiagnosI[]) {
    let jsonData: {'encounter': {date: string}; 'conditions'?: any};
     value.selects.map((data: {name: string, comment: string}) => { 
        diagnoses.filter(d => {
            d['comment'] = data.comment;
        return d.id.toString() === data.name });
     });


    console.log('diagnose new array pipe', diagnoses);



    jsonData = {
        "encounter": {
            "date": value.date
        }
    }

   if(diagnoses.length) {
    jsonData['conditions'] = [];

    diagnoses.map( (diagnos: DiagnosI) => jsonData.conditions.push(
          
      {
          "id": diagnos.id,        
          "context": {
              "identifier": {
                  "type": {
                      "coding": [
                          {
                              "system": "eHealth/resources",
                              "code": "encounter"
                          }
                      ]
                  },
                  "value": diagnos.id
              }
          },
          "code": {
              "coding": [
                  {
                      "system": "eHealth/ICPC2/condition_codes",
                      "code": diagnos.code
                  }
              ]
          },
         "notes": diagnos.comment || '',	
          "onset_date": value.date       
      }
    ))
   }

   return jsonData;
  }
}


