import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { fields } from '../../../Model/fields'

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {


  _formFieldName: string;
  get formFieldName(): string {
    return this._formFieldName;
  }

  @Input('formFieldName')
  set formFieldName(value: string) {
    this._formFieldName = value;
  }

  _FieldDetails: any;
  get FieldDetails(): any {
    return this._FieldDetails;
  }

  @Input('FieldDetails')
  set FieldDetails(value: any) {
    this._FieldDetails = value;
  }


  constructor() { }

  ngOnInit(): void {
  }


}
