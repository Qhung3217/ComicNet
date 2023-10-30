import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './views/base/footer/footer.component';
import { HeaderModule } from './views/base/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
