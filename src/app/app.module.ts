import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';
import { MarketplaceState } from './store/marketplace.state';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    SharedModule,
    HttpClientModule,
    NgxsModule.forRoot([MarketplaceState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
