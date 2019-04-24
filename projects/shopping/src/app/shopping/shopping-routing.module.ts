import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./views/list/component/list.component";
import {ShoppingComponent} from "./shopping.component";
import {HomeComponent} from "./views/home/component/home.component";

const routes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {title: 'Home'}
      },
      {
        path: 'list',
        component: ListComponent,
        data: {title: 'List'}
      },
    ]

  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
