import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormFieldsService } from '../../Services/form-fields.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  LoadBody = false;
  itemInfo: any;
  generateFormFields: [];

  constructor(private FormFieldsService: FormFieldsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {


  }


  fetchProducts(userAction) {
    this.LoadBody = false;
    switch (userAction) {
      case 'B':
      case 'b':
        break;
      case 'S':
      case 's':
        break;
      case 'T':
      case 't':
        break;
    }

    this.FormFieldsService.getFormFields().subscribe(data => {
      this.generateForm(data);
    });

  }

  generateForm(inputData) {
    this.LoadBody = true;
    this.generateFormFields = inputData;
  }


  //do not delete the below; scroll code --> Sujitha 26/April/2020
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {

    let element = document.querySelector('.navbar');
    if (window.pageYOffset > 10) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  //do not delete the above; scroll code --> Sujitha 26/April/2020

}
