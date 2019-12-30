import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PointsTableComponent } from "./points-table/points-table.component";
import { YesNoPipe } from "./shared/yes-no.pipe";

@NgModule({
  declarations: [AppComponent, PointsTableComponent, YesNoPipe],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
