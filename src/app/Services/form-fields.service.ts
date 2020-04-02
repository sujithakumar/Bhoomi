import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {



  url = "https://e4yl1.mocklab.io/formFields";

  public ItemFields: BehaviorSubject<any> = new BehaviorSubject<any>({
  });

  constructor(private http: HttpClient) {
  }


  //get form details
  public getFormFields(): Observable<any> {
    return this.http.get(this.url);
  }

  //passing data between components:

  setItemFields(ItemFields: any) {
    this.ItemFields.next(ItemFields);
  }

  getItemFields() {
    return this.ItemFields.asObservable();
  }
}
