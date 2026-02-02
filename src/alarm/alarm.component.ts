import { Component } from "@angular/core";

@Component({
    selector: 'alarm',
    template: `
        <span>Alarm!</span>
        <test-button>Close</test-button>
    `,
    standalone: false,
})
export class AlarmComponent {}