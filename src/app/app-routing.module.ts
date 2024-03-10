import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/skysight/components/home/home.component';

const routes: Routes = [
  {
    path: '', //quando o caminho for vazio
    redirectTo: 'skysight',
    pathMatch: 'full'
  },
  {
    path: 'skysight',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
