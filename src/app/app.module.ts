import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appEffects, appReducer } from './core/reducers/app';
import { FooterComponent } from './views/base/footer/footer.component';
import { HeaderModule } from './views/base/header/header.module';
import { CatchErrorInterceptor } from './core/interceptors/catch-error/catch-error.interceptor';

// Register the Vietnamese locale data
registerLocaleData(localeVi, 'vi');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    FooterComponent,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' },
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: CatchErrorInterceptor,
        multi: true,
      },
    ],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
