import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FatherComponent } from './father-child/father.component';
import { ChildComponent } from './father-child/child.component';
import {RouterModule,Routes} from '@angular/router';;
const Routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent},
  { path: 'father-child',  component: FatherComponent},
  { path: 'about',  loadChildren: () => new Promise(resolve => {
    (require as any).ensure([],(require: any) => {
      resolve(require('./about/about.module').AboutModule);
    })
  })
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FatherComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
