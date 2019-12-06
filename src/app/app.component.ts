import { Component, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { SubscriberComponent } from "./subscriber/subscriber.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-playground";

  constructor(injector: Injector) {
    const SubscriberElement = createCustomElement(SubscriberComponent, {
      injector
    });

    customElements.define("subscriber-element", SubscriberElement);
  }
}
