import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebCookerHomeComponent } from './components/web-cooker-home/web-cooker-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: WebCookerHomeComponent
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
