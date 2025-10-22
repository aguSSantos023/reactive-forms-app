import { Routes } from "@angular/router";
import { BasicP } from "./pages/basic-p/basic-p";
import { DynamicP } from "./pages/dynamic-p/dynamic-p";
import { SwitchesP } from "./pages/switches-p/switches-p";



export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Básicos',
        component: BasicP
      },
      {
        path: 'dynamic',
        title: 'Dinamicos',
        component: DynamicP
      },
      {
        path: 'switches',
        title: 'Switches',
        component: SwitchesP
      },
      {
        path: '**',
        redirectTo: 'basic'
      },
    ]
  }
]
