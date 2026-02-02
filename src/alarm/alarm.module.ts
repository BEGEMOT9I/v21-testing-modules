import { NgModule } from "@angular/core";
import { AlarmComponent } from "./alarm.component";
import { ButtonComponent } from "../button/button.component";

@NgModule({
    imports: [ButtonComponent],
    declarations: [AlarmComponent],
    exports: [AlarmComponent]
})
export class AlarmModule {}