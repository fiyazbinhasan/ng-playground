import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SubscriberComponent } from './subscriber/subscriber.component';

import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

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
