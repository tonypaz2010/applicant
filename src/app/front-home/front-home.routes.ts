import { Routes } from "@angular/router";
import { FrontLayoutComponent } from "./layouts/front-layout/front-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ApplicantComponent } from "./pages/applicant/applicant.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

export const frontLayoutComponent: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'applicant/:applicant',
        component: ApplicantComponent
      },
      {
        path: '**',
        component: NotFoundPageComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
];

export default frontLayoutComponent;
