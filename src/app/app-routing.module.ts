import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingModule} from "../../projects/shopping/src/app/shopping/shopping.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ShoppingModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
