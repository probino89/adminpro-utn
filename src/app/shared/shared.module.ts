import { NgModule } from "@angular/core";

import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { HeaderComponent } from "./header/header.component";



@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        NopagefoundComponent       
    ], 
    exports:[
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        NopagefoundComponent
    ]    
})
export class SharedModule{ }