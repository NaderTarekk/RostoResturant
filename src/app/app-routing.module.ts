import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './account/components/sign-in/sign-in.component';
import { SignUpComponent } from './account/components/sign-up/sign-up.component';
import { PageComponent } from './main/components/page/page.component';

const routes: Routes = [
  { path: "signIn", component: SignInComponent },
  { path: "signUp", component: SignUpComponent },
  { path: "page", component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
