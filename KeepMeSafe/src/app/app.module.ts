import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeneratePassComponent } from './generate-pass/generate-pass.component';
import { CheckPassComponent } from './check-pass/check-pass.component';
import { PasswordGeneratorService } from './services/password-generator.service';
import { PasswordCheckerService } from './services/password-checker.service';

@NgModule({
  declarations: [
    AppComponent,
    GeneratePassComponent,
    CheckPassComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    PasswordGeneratorService,
    PasswordCheckerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
