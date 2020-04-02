import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {

  public ItemFields: BehaviorSubject<any> = new BehaviorSubject<any>({
  });

  constructor(private http: HttpClient) {
  }

  //get form details
  public getFormFields(): Observable<any> {
    return this.http.get("../../assets/Data/formFields.json");
  }

  //passing data between components:

  setItemFields(ItemFields: any) {
    this.ItemFields.next(ItemFields);
  }

  getItemFields() {
    return this.ItemFields.asObservable();
  }
}
