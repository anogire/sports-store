import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { AdminModule } from './admin/admin.module';
import { ModelModule } from './model/model.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    HeadComponent,
    NotFoundComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    AdminModule,
    AppRoutingModule,
    ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
