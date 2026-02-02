import { NgModule } from "@angular/core";
import { ButtonModule } from "./button/button.module";
import { AlarmComponent } from "./alarm/alarm.component";

@NgModule({
    declarations: [AlarmComponent],
    imports: [ButtonModule],
    exports: [ButtonModule, AlarmComponent],
})
export class SharedModule {}