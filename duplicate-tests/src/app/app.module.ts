import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CamelCaseToTitlePipe } from './camel-case-to-title/camel-case-to-title.pipe';


@NgModule({
  declarations: [
    AppComponent, CamelCaseToTitlePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
