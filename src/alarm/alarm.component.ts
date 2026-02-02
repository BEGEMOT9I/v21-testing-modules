import { Component } from "@angular/core";

export const ALARM_TYPES = ['success', 'error']

@Component({
    selector: 'alarm',
    template: `
        <span>Alarm!</span>
        <test-button>Close</test-button>
    `,
    standalone: false,
})
export class AlarmComponent {}