import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Form Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Owl Carousel
import { CarouselModule } from 'ngx-owl-carousel-o';
// Browser Animation Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//  Mat Chip Module
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material';
//  Mat Icon Module
import {MatIconModule} from '@angular/material';
// Mat From Field Module
import { MatFormFieldModule, MatInputModule } from '@angular/material';

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
import { from } from 'rxjs';
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
    NgbModule, //For Bootstrap
    FormsModule, // For Form Module
    CarouselModule, // For Owl Carousel
    BrowserAnimationsModule, // Animation Module
    MatChipsModule, // For Mat Chip
    MatAutocompleteModule, // For Auto Complete
    MatIconModule, // For Metarial Icon (It is for metarial icon)
    ReactiveFormsModule, // For From Module chip
    MatFormFieldModule, // For From Field
    MatInputModule // For From Field
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
