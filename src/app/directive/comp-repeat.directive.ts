import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCompRepeat]'
})
export class CompRepeatDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

  @Input() set appCompRepeat(loops: number) {
    this.viewContainerRef.clear();
    for (let index = 0; index < loops; ++index) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
