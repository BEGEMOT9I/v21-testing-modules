import { Component } from "@angular/core";

@Component({
    selector: 'test-button',
    template: '<button type="button"><ng-content></ng-content></button>',
})
export class ButtonComponent {}