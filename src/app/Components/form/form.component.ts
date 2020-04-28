
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() generateFormFields: any;

  inputForm: FormGroup;
  submitted = false;
  FormFieldsArr = [];
  formFieldNames = [];
  Item: string;
  constructor(private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      Item: ['']
    });

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.generateFormFields && changes.generateFormFields.currentValue) {
      this.generateForm();
    }

  }


  generateForm() {
    this.FormFieldsArr = Object.values(this.generateFormFields.formFields);
    this.formFieldNames = Object.keys(this.generateFormFields.formFields);
  }



}
