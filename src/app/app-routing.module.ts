import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcasComponent } from './calcas/calcas.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { HomeComponent } from './home/home.component';
import { SapatosComponent } from './sapatos/sapatos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'sapatos',
    component: SapatosComponent
  },


  {
    path: 'camisetas',
    component: CamisetasComponent
  },

  {
    path: 'calcas',
    component: CalcasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
