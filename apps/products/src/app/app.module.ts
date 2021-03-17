import { APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'products',
          pathMatch: 'full',
          loadChildren: () =>
            import('@nx-example/products/home-page').then(
              (module) => module.ProductsHomePageModule
            ),
        },
        {
          path: 'products/product',
          loadChildren: () =>
            import('@nx-example/products/product-detail-page').then(
              (module) => module.ProductsProductDetailPageModule
            ),
        },
        { path: '**', component: EmptyRouteComponent }
      ],
      { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }
    ),
    StoreModule.forRoot({}),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
