import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormFieldsService } from '../../Services/form-fields.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  inputForm: FormGroup;
  submitted = false;
  responseData: any;
  dropDownFields: any;
  textBoxes: any;

  @Input() itemInfo: any;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private FormFieldsService: FormFieldsService) { }
  ngOnInit(): void {


    // this.inputForm = this.formBuilder.group({
    //   taskNumber: ['', Validators.required],
    //   Category: ['', Validators.required],
    //   status: ['', Validators.required],
    //   Task: ['', Validators.required],
    //   AssignedTo: ['', Validators.required],
    //   description: [],
    //   DueDate: ['', Validators.required],
    //   WatchList: ['', Validators.required],
    //   SubTask: [],
    //   newComments: []
    // });
  }


  ngOnChanges(changes: SimpleChanges) {

    if (changes.itemInfo && changes.itemInfo.currentValue) {

      this.setFormFields();
    }
  }


  get f() {
    return this.inputForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    //return on errors
    if (this.inputForm.invalid) {
      return;
    }
    alert("valid");
  }

  setFormFields() {
    this.FormFieldsService.getFormFields().subscribe(data => {
      this.responseData = data;
      var fields = data[this.itemInfo.itemType];
      this.dropDownFields = fields.dropDown || false;
      this.textBoxes = fields.textBox || false;
    });

  }

}
