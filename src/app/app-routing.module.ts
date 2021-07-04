import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //  redirectTo: 'home', pathMatch: 'full'
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    //  redirectTo: 'home', pathMatch: 'full'
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    //  redirectTo: 'home', pathMatch: 'full'
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'project',
    //  redirectTo: 'home', pathMatch: 'full'
    loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'experience',
    //  redirectTo: 'home', pathMatch: 'full'
    loadChildren: () => import('./experience/experience.module').then((m) => m.ExperienceModule),
  },
  {
    path: 'contact',
    //  redirectTo: 'home', pathMatch: 'full'
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
