import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SubscriberComponent } from './subscriber/subscriber.component';

@NgModule({
  declarations: [SubscriberComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  entryComponents: [SubscriberComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const SubscriberElement = createCustomElement(SubscriberComponent, {
      injector
    });

    customElements.define('subscriber-element', SubscriberElement);
  }

  ngDoBootstrap() {}
}
