import { Routes } from "@angular/router";
import { RegisterP } from "./pages/register-p/register-p";



export const authRoutes: Routes = [
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
