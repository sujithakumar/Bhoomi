import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { InputComponent } from '../app/Components/input/input.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'inputForm',
    component: InputComponent
  },

  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
