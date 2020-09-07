import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app-routes";
import { AppLayoutsModule } from "./layouts/layouts.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AppLayoutsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
