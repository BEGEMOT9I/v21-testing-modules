import { Component } from "@angular/core";

export const THEME_COLOR = 'red';

@Component({
    selector: 'test-button',
    template: '<button type="button" [style]="style">Click me</button>',
    standalone: false,
})
export class ButtonComponent {
    color = THEME_COLOR;
    style = {
        color: this.color
    }
}