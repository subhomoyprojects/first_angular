import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import Url Path
import { Step1Component } from '../registration/step1/step1.component';
import { SubscriptionComponent } from '../registration/subscription/subscription.component';
import { BasicdetailsComponent } from '../registration/basicdetails/basicdetails.component';
import { AddfoodsComponent } from '../registration/addfoods/addfoods.component';
import { AddmoreinformationComponent } from '../registration/addmoreinformation/addmoreinformation.component';
import { DrinkcategoryComponent } from '../registration/drinkcategory/drinkcategory.component';
import { AddoffersComponent } from '../registration/addoffers/addoffers.component';
import { RegistrationcompletedComponent } from '../registration/registrationcompleted/registrationcompleted.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', redirectTo: '/registration/step1', pathMatch: 'full' },
  { path: 'registration/step1', component: Step1Component },
  { path: 'registration/subscription', component: SubscriptionComponent },
  { path: 'registration/basicdetails', component: BasicdetailsComponent },
  { path: 'registration/addfoods', component: AddfoodsComponent },
  { path: 'registration/addmoreinfo', component: AddmoreinformationComponent },
  { path: 'registration/drinkcategory', component: DrinkcategoryComponent },
  { path: 'registration/addoffers', component: AddoffersComponent },
  { path: 'registration/rgcompleted', component: RegistrationcompletedComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{
    useHash:true
  }) ],
  exports: [ RouterModule ]
  })
export class AppRoutingModule {}