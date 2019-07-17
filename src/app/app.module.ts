import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { LogComponent } from './log/log.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { FilterNumberComponent } from './filter-number/filter-number.component';
import { FilterGenderComponent } from './filter-gender/filter-gender.component';
import { FilterNatComponent } from './filter-nat/filter-nat.component';
import {HoverDirective} from './hover.directive';
import { SearchPipe } from './search.pipe';

const routes =[
  {path:'', component: HomePageComponent},
  {path:'setup', component: SetupPageComponent},
  {path:'add', component: NewUserComponent},
  { path: '**', redirectTo: '' }  
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardComponent,
    SetupPageComponent,
    LogComponent,
    NewUserComponent,
    ScrollTopComponent,
    FilterNumberComponent,
    FilterGenderComponent,
    FilterNatComponent,
    HoverDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
