import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkysightComponent } from './page/skysight/skysight.component';

const routes: Routes = [
  {
    path: '', //quando o caminho for vazio
    redirectTo: 'skysight',
    pathMatch: 'full'
  },
  {
    path: 'skysight',
    component: SkysightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
