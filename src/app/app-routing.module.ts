import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent
  },
  { path: ':id', component: MainContentComponent
  },
  { path: '', redirectTo:'/home', pathMatch:'full'
  },
  { 
    path: 'not-found', 
    component: PageNotFoundComponent
  },
  { 
    path: '**', 
    redirectTo: '/not-found', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
