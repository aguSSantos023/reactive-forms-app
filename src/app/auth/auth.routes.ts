import { Routes } from "@angular/router";
import { RegisterP } from "./pages/register-p/register-p";



const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        component: RegisterP
      },
      {
        path: '**',
        redirectTo: 'sign-up'
      }
    ]
  }
]


export default authRoutes;
