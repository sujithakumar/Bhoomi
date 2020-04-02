import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormFieldsService } from '../app/Services/form-fields.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  LoadBody = false;
  itemInfo: any;

  constructor(private FormFieldsService: FormFieldsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {


  }

  generateForm(itemName, itemType) {
    this.LoadBody = true;
    this.itemInfo = {
      "itemName": itemName,
      "itemType": itemType
    }

  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {

    let element = document.querySelector('.navbar');
    if (window.pageYOffset > 10) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}
