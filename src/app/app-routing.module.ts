import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTestOneComponent } from './menu-test-one/menu-test-one.component';
import { MenuTestTwoComponent } from './menu-test-two/menu-test-two.component';

const routes: Routes = [
  {path:"one",component: MenuTestOneComponent},
  {path:"two",component: MenuTestTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
