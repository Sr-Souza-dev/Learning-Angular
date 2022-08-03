import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './escopo/title.component';
import { BindingComponent } from './binding/binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { SharedModule } from './shared/shared.module';
import { FormsComponent } from './forms/forms.component';
import { ReativeFormComponent } from './reative-form/reative-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BindingComponent,
    DiretivasComponent,
    FormsComponent,
    ReativeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
