import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagePageComponent } from './image-page/image-page.component';
import { InfiniteScrollingComponent } from './infinite-scrolling/infinite-scrolling.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { Mainpage1Component } from './mainpage1/mainpage1.component';
import { UsertableComponent } from './usertable/usertable.component';
import { Mainpage2Component } from './mainpage2/mainpage2.component';

const routes: Routes = [
  { path: '', component: ImagePageComponent },
  { path: 'home', component: ImagePageComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'timer1', component: Mainpage1Component },
  { path: 'timer2', component: Mainpage2Component },
  { path: 'tablesorting', component: UsertableComponent },
  { path: 'infinite', component: InfiniteScrollingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
