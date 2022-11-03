import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page1',
  },
  {
    path: 'page1',
    component: Page1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
