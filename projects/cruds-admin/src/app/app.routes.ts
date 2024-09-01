import { LayoutComponent } from './layout/layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
 {path:'',loadComponent:()=>import("./layout/layout.component").then(m=>m.LayoutComponent)
      ,children:[

   {path:'users',loadComponent:()=>import('./tasks/users.component').then(m=>m.UsersComponent)}
      ]
 },

   
          {path:'login',loadComponent:()=>import("./auth/login/login.component").then(m=>m.LoginComponent)},
];
