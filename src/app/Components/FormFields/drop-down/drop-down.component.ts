import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

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
