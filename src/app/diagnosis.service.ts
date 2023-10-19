import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DiagnosI } from './models/diagnos.interface';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  private data: DiagnosI[] = 
  [
    {
      "id": 1823,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "P01",
      "name": "\u0412\u0456\u0434\u0447\u0443\u0442\u0442\u044F \u0442\u0440\u0438\u0432\u043E\u0433\u0438/\u043D\u0435\u0440\u0432\u0443\u0432\u0430\u043D\u043D\u044F/\u043D\u0430\u043F\u0440\u0443\u0436\u0435\u043D\u043E\u0441\u0442\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1824,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "P02",
      "name": "\u0413\u043E\u0441\u0442\u0440\u0430 \u0440\u0435\u0430\u043A\u0446\u0456\u044F \u043D\u0430 \u0441\u0442\u0440\u0435\u0441 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1826,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "P04",
      "name": "\u0412\u0456\u0434\u0447\u0443\u0442\u0442\u044F /\u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430 \u0440\u043E\u0437\u0434\u0440\u0430\u0442\u043E\u0432\u0430\u043D\u043E\u0441\u0442\u0456 /\u0437\u043B\u043E\u0441\u0442\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1837,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "P16",
      "name": "\u0413\u043E\u0441\u0442\u0440\u0430 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u0430 \u0456\u043D\u0442\u043E\u043A\u0441\u0438\u043A\u0430\u0446\u0456\u044F ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1859,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "P80",
      "name": "\u0420\u043E\u0437\u043B\u0430\u0434 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0441\u0442\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1861,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "P82",
      "name": "\u041F\u043E\u0441\u0442\u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u043D\u0438\u0439 \u0441\u0442\u0440\u0435\u0441 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1886,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "R74",
      "name": "\u0413\u043E\u0441\u0442\u0440\u0430 \u0456\u043D\u0444\u0435\u043A\u0446\u0456\u044F \u0432\u0435\u0440\u0445\u043D\u0456\u0445 \u0434\u0438\u0445\u0430\u043B\u044C\u043D\u0438\u0445 \u0448\u043B\u044F\u0445\u0456\u0432 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1887,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "R75",
      "name": "\u0421\u0438\u043D\u0443\u0441\u0438\u0442 \u0433\u043E\u0441\u0442\u0440\u0438\u0439 / \u0445\u0440\u043E\u043D\u0456\u0447\u043D\u0438\u0439 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1888,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "R76",
      "name": "\u0413\u043E\u0441\u0442\u0440\u0438\u0439 \u0442\u043E\u043D\u0437\u0438\u043B\u0456\u0442 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1889,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "R77",
      "name": "\u0413\u043E\u0441\u0442\u0440\u0438\u0439 \u043B\u0430\u0440\u0438\u043D\u0433\u0456\u0442 / \u0442\u0440\u0430\u0445\u0435\u0457\u0442 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1890,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "R78",
      "name": "\u0413\u043E\u0441\u0442\u0440\u0438\u0439 \u0431\u0440\u043E\u043D\u0445\u0456\u0442 / \u0431\u0440\u043E\u043D\u0445\u0456\u043E\u043B\u0456\u0442 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1919,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "S11",
      "name": "\u0428\u043A\u0456\u0440\u043D\u0430 \u0456\u043D\u0444\u0435\u043A\u0446\u0456\u044F \u043F\u043E\u0441\u0442\u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u043D\u0430 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1938,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "S71",
      "name": "\u041F\u0440\u043E\u0441\u0442\u0438\u0439 \u0433\u0435\u0440\u043F\u0435\u0441 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1939,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "S72",
      "name": "\u041A\u043E\u0440\u043E\u0441\u0442\u0430 / \u0456\u043D\u0448\u0456 \u0430\u043A\u0430\u0440\u0456\u0430\u0437\u0438 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 1974,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "T10",
      "name": "\u0417\u0430\u0442\u0440\u0438\u043C\u043A\u0430 \u0440\u043E\u0441\u0442\u0443 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2022,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "U90",
      "name": "\u041E\u0440\u0442\u043E\u0441\u0442\u0430\u0442\u0438\u0447\u043D\u0430 \u0430\u043B\u044C\u0431\u0443\u043C\u0456\u043D\u0443\u0440\u0456\u044F / \u043F\u0440\u043E\u0442\u0435\u0457\u043D\u0443\u0440\u0456\u044F",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2026,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W01",
      "name": "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2027,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W02",
      "name": "\u0421\u0442\u0440\u0430\u0445 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2029,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W05",
      "name": "\u0411\u043B\u044E\u0432\u0430\u043D\u043D\u044F/\u043D\u0443\u0434\u043E\u0442\u0430 \u043F\u0440\u0438 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2030,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W10",
      "name": "\u041F\u043E\u0441\u0442\u043A\u043E\u0457\u0442\u0430\u043B\u044C\u043D\u0430 \u043A\u043E\u043D\u0442\u0440\u0430\u0446\u0435\u043F\u0446\u0456\u044F ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2039,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W21",
      "name": "\u0421\u0442\u0443\u0440\u0431\u043E\u0432\u0430\u043D\u0456\u0441\u0442\u044C \u0432\u0438\u0433\u043B\u044F\u0434\u043E\u043C \u043F\u0456\u0434 \u0447\u0430\u0441 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2040,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W27",
      "name": "\u0421\u0442\u0440\u0430\u0445 \u0443\u0441\u043A\u043B\u0430\u0434\u043D\u0435\u043D\u043D\u044F \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2052,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W81",
      "name": "\u0422\u043E\u043A\u0441\u0438\u043A\u043E\u0437 \u043F\u0440\u0438 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2053,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W82",
      "name": "\u0421\u043F\u043E\u043D\u0442\u0430\u043D\u043D\u0438\u0439 \u0430\u0431\u043E\u0440\u0442 Y85 \u0414\u043E\u0431\u0440\u043E\u044F\u043A\u0456\u0441\u043D\u0430 \u0433\u0456\u043F\u0435\u0440\u043F\u043B\u0430\u0437\u0456\u044F \u043F\u0440\u043E\u0441\u0442\u0430\u0442\u0438",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2062,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W95",
      "name": "\u0417\u0430\u0445\u0432. \u0433\u0440\u0443\u0434\u0435\u0439 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456/\u043F\u0456\u0441\u043B\u044F\u043F\u043E\u043B, \u0456\u043D\u0448\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2063,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "W99",
      "name": "\u0417\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u0456\u0434 \u0447\u0430\u0441 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456/\u043F\u043E\u043B\u043E\u0433\u0456\u0432, \u0456\u043D\u0448\u0456 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2075,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "X12",
      "name": "\u041F\u043E\u0441\u0442\u043C\u0435\u043D\u043E\u043F\u0430\u0443\u0437\u0430\u043B\u044C\u043D\u0430 \u043A\u0440\u043E\u0432\u043E\u0442\u0435\u0447\u0430 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2076,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "X13",
      "name": "\u041F\u043E\u0441\u0442\u043A\u043E\u0457\u0442\u0430\u043B\u044C\u043D\u0430 \u043A\u0440\u043E\u0432\u043E\u0442\u0435\u0447\u0430 ",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2114,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "X91",
      "name": "\u0413\u043E\u0441\u0442\u0440\u0456 \u043A\u043E\u043D\u0434\u0438\u043B\u043E\u043C\u0438 \u0443 \u0436\u0456\u043D\u043E\u043A",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2122,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "Y06",
      "name": "\u041F\u0440\u043E\u0441\u0442\u0430\u0442\u0430 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u0438/\u0441\u043A\u0430\u0440\u0433\u0438",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2138,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "Y73",
      "name": "\u041F\u0440\u043E\u0441\u0442\u0430\u0442\u0438\u0442/ \u0432\u0435\u0437\u0438\u043A\u0443\u043B\u0456\u0442",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2141,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "Y76",
      "name": "\u0413\u043E\u0441\u0442\u0440\u0456 \u043A\u043E\u043D\u0434\u0438\u043B\u043E\u043C\u0438 \u0443 \u0447\u043E\u043B\u043E\u0432\u0456\u043A\u0456\u0432",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2142,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "Y77",
      "name": "\u0417\u043B\u043E\u044F\u043A\u0456\u0441\u043D\u0435 \u043D\u043E\u0432\u043E\u0443\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0441\u0442\u0430\u0442\u0438",
      "shortName": "",
      "isPublic": true
    },
    {
      "id": 2162,
      "chapterNumber": null,
      "chapterName": "",
      "blockNumber": "",
      "blockName": "",
      "code": "Z11",
      "name": "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043F\u0440\u0438\u0445\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0434\u043E \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
      "shortName": "",
      "isPublic": true
    }
  ];

  // API URI
  private url = " https://global.lakmus.org/Dictionaries";
  constructor(private http: HttpClient) { }

  getDiagnosisList(type: string, isPublic: boolean = true, search: string = 'Сто'): Observable<DiagnosI[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set("IsPublic", isPublic).append('Search', search);

    // return this.http.get<any>(this.url + '/' + type, { params: queryParams });
    return of(this.data);
  }
}
