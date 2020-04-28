import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {



  url = "./assets/Data/formFields.json";


  constructor(private http: HttpClient) {
  }


  //get form details
  public getFormFields(): Observable<any> {
    return this.http.get(this.url);
  }


}
