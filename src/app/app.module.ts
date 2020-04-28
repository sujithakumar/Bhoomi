import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { TextBoxComponent } from './Components/FormFields/text-box/text-box.component';
import { DropDownComponent } from './Components/FormFields/drop-down/drop-down.component';
import { RadioComponent } from './Components/FormFields/radio/radio.component';
import { TextAreaComponent } from './Components/FormFields/text-area/text-area.component';
import { FormComponent } from './Components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextBoxComponent,
    DropDownComponent,
    RadioComponent,
    TextAreaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
