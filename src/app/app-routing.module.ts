import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebCookerCartComponent } from './components/web-cooker-cart/web-cooker-cart.component';
import { WebCookerHomeComponent } from './components/web-cooker-home/web-cooker-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: WebCookerHomeComponent
  },
  {
    path: 'cart',
    component: WebCookerCartComponent
  },
  {
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'home',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
