import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import Url Path
import { Step1Component } from '../registration/step1/step1.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', redirectTo: '/registration/step1', pathMatch: 'full' },
  { path: 'registration/step1', component: Step1Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{
    useHash:true
  }) ],
  exports: [ RouterModule ]
  })
export class AppRoutingModule {}