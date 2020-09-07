import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppLayoutComponent } from "./layouts/layout/layout.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./views/main/home/home.module").then((x) => x.AppHomeModule),
      },
    ],
  },
  { path: "**", redirectTo: "" },
];
