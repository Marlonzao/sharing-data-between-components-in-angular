import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataViaInputComponent } from './data-via-input/data-via-input.component';
import { ChildComponent } from './data-via-input/child-component/child.component';
import { MoneyInput } from './data-via-input/money-input/money-input'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
  declarations: [
    MoneyInput,
    AppComponent,
    ChildComponent,
    DataViaInputComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
