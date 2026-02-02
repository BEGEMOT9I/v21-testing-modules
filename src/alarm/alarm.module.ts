import { NgModule } from "@angular/core";
import { AlarmComponent } from "./alarm.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
    declarations: [AlarmComponent],
    imports: [ButtonModule],
    exports: [AlarmComponent]
})
export class AlarmModule {}