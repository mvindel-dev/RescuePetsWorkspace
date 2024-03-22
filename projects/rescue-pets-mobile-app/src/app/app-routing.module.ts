import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add-pet', loadChildren: () => import('./view/add-pet/add-pet.module').then( m => m.AddPetPageModule) },
  { path: 'cats', loadChildren: () => import('./view/animals/cats/cats.module').then( m => m.CatsPageModule) },
  { path: 'dogs', loadChildren: () => import('./view/animals/dogs/dogs.module').then( m => m.DogsPageModule) },
  { path: 'home', loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule) },
  { path: 'header', loadChildren: () => import('./view/layouts/header/header.module').then( m => m.HeaderPageModule) },
  { path: 'footer', loadChildren: () => import('./view/layouts/footer/footer.module').then( m => m.FooterPageModule) },
  { path: 'login', loadChildren: () => import('./view/layouts/login/login.module').then( m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./view/layouts/register/register.module').then( m => m.RegisterPageModule) },
  { path: 'page-not-found', loadChildren: () => import('./view/layouts/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule) },
  { path: 'pet', loadChildren: () => import('./view/pet/pet.module').then( m => m.PetPageModule) },
  { path: 'timetable', loadChildren: () => import('./view/timetable/timetable.module').then( m => m.TimetablePageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }