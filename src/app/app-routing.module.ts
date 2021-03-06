import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'seat-choice',
    loadChildren: () => import('./pages/seat-choice/seat-choice.module').then( m => m.SeatChoicePageModule)
  },
  {
    path: 'movie-list',
    loadChildren: () => import('./pages/movie-list/movie-list.module').then( m => m.MovieListPageModule)
  },
  {
    path: 'food-choice',
    loadChildren: () => import('./pages/food-choice/food-choice.module').then( m => m.FoodChoicePageModule)
  },
  {
    path: 'ticket-information',
    loadChildren: () => import('./pages/ticket-information/ticket-information.module').then( m => m.TicketInformationPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pages/pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'account-information',
    loadChildren: () => import('./pages/account-information/account-information.module').then( m => m.AccountInformationPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
