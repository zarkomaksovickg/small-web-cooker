import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebCookerHomeComponent } from './components/web-cooker-home/web-cooker-home.component';
import { WebCookerHeaderComponent } from './components/web-cooker-header/web-cooker-header.component';
import { MaterialModule } from './modules/material/material.module';
import { SearchRecipeComponent } from './components/common/search-recipe/search-recipe.component';
import { WebCookerLogoComponent } from './components/common/web-cooker-logo/web-cooker-logo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebCookerSearchComponent } from './components/web-cooker-search/web-cooker-search.component';
import { FormsModule } from '@angular/forms';
import { WebCookerRecipesListComponent } from './components/web-cooker-recipes-list/web-cooker-recipes-list.component';
import { WebCookerRecipeItemComponent } from './components/web-cooker-recipe-item/web-cooker-recipe-item.component';
import { TextLengthPipe } from './pipes/text-length.pipe';
import { LoadingComponent } from './components/common/loading/loading.component';
import { WebCookerRecipeItemDialogComponent } from './components/common/web-cooker-recipe-item-dialog/web-cooker-recipe-item-dialog.component';
import { WebCookerButtonComponent } from './components/common/web-cooker-button/web-cooker-button.component';
import { WebCookerCartComponent } from './components/web-cooker-cart/web-cooker-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    WebCookerHomeComponent,
    WebCookerHeaderComponent,
    SearchRecipeComponent,
    WebCookerLogoComponent,
    WebCookerSearchComponent,
    WebCookerRecipesListComponent,
    WebCookerRecipeItemComponent,
    TextLengthPipe,
    LoadingComponent,
    WebCookerRecipeItemDialogComponent,
    WebCookerButtonComponent,
    WebCookerCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
