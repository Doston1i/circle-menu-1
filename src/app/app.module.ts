import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTestOneComponent } from './menu-test-one/menu-test-one.component';
import { MenuTestTwoComponent } from './menu-test-two/menu-test-two.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuTestOneComponent,
    MenuTestTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
