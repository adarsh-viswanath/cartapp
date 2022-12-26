import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { addservice } from './addservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CartlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [addservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
