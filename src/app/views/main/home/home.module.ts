import { Routes, RouterModule } from "@angular/router";
import { AppHomeComponent } from "./home.component";
import { NgModule } from "@angular/core";

const ROUTES: Routes = [{ path: "", component: AppHomeComponent }];

@NgModule({
  declarations: [AppHomeComponent],
  imports: [RouterModule.forChild(ROUTES)],
})
export class AppHomeModule {}
