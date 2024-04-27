import { ProductspageComponent } from './productspage/productspage.component_static';
import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './productspage/product-details/product-details.component';
import { ProductFormComponent } from './productspage/product-form/product-form.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'products', component: ProductspageComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'products/:id/edit', component: ProductFormComponent },
    { path: '**', component:ErrorNotFoundComponent },

];
