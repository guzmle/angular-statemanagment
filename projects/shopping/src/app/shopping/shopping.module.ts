import {NgModule} from '@angular/core';
import {ListComponent} from './views/list/component/list.component';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './elements/header/header.component';
import {ShoppingComponent} from './shopping.component';
import {ShoppingRoutingModule} from "./shopping-routing.module";
import {NavigationInfoComponent} from "./elements/navigation-info/navigation-info.component";
import {HomeComponent} from "./views/home/component/home.component";

@NgModule({
  declarations: [
    ListComponent,
    HeaderComponent,
    NavigationInfoComponent,
    ShoppingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule {
}
