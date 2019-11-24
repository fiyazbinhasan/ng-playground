import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faUpload);
  }
}
