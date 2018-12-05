import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componennt Create
import { AppComponent } from './app.component';
import { HeaderComponent } from './registration/header/header.component';
import { FooterComponent } from './registration/footer/footer.component';
import { BasicdetailsComponent } from './registration/basicdetails/basicdetails.component';
import { AdddrinksComponent } from './registration/adddrinks/adddrinks.component';
import { AddfoodsComponent } from './registration/addfoods/addfoods.component';
import { AddmoreinformationComponent } from './registration/addmoreinformation/addmoreinformation.component';
import { AddoffersComponent } from './registration/addoffers/addoffers.component';
import { DrinkcategoryComponent } from './registration/drinkcategory/drinkcategory.component';
import { HappyhoursComponent } from './registration/happyhours/happyhours.component';
import { RegistrationcompletedComponent } from './registration/registrationcompleted/registrationcompleted.component';
import { Step1Component } from './registration/step1/step1.component';
import { SubscriptionComponent } from './registration/subscription/subscription.component';
import { AppRoutingModule } from './routing/app-routing.module';

// Ngb Bootstrap Start
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Ngb Bootstrap End

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicdetailsComponent,
    AdddrinksComponent,
    AddfoodsComponent,
    AddmoreinformationComponent,
    AddoffersComponent,
    DrinkcategoryComponent,
    HappyhoursComponent,
    RegistrationcompletedComponent,
    Step1Component,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule //For Bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
