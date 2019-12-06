import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SubscriberComponent } from "./subscriber/subscriber.component";
import { SubscriberService } from "./shared/subscriber.service";

@NgModule({
  declarations: [AppComponent, SubscriberComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [SubscriberService],
  bootstrap: [AppComponent],
  entryComponents: [SubscriberComponent]
})
export class AppModule {}
