import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {createCustomElement} from "@angular/elements";
import {AkomponienteComponent} from "../akomponiente/akomponiente.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AmoduleModule {
  constructor(private injector: Injector) {
    console.log('AmoduleModule::constructor');
    customElements.define('wc-akomponiente', createCustomElement(AkomponienteComponent, {injector: this.injector}));
  }

}
