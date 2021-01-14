import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { TestRouteComponent } from './test.route.component';


const routes: Routes = [
  {
      path: 'sub',
      component: TestRouteComponent
  }
];

@NgModule({
  declarations: [AppComponent,TestRouteComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
