import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFeedComponent } from './admin-feed/admin-feed.component';
import { AdminComponent } from './admin/admin.component';
import { AdminappliedloanComponent } from './adminappliedloan/adminappliedloan.component';
import { AdminapprovedloanComponent } from './adminapprovedloan/adminapprovedloan.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoanstatusComponent } from './loanstatus/loanstatus.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'user',component:UserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  {path:'login',component:LoginComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'registerNewUser',component:SignupComponent},
  {path:'applyloan',component:ApplyloanComponent},
  {path:'loanstatus',component:LoanstatusComponent},
  {path:'adminappliedloan',component:AdminappliedloanComponent},
  {path:'adminapprovedloan',component:AdminapprovedloanComponent},
  {path:"details/:id",component:CustomerDetailComponent},
  {path:"edit/:id",component:CustomerEditComponent},
  {path:'searchdetail/:id',component:SearchCustomerComponent},
  {path:'profile',component:ProfileComponent},
  {path:'feedback',component:FeedbackComponent},
  { path: 'thankYou', component: ThankyouComponent },
  { path: 'adminfeed', component: AdminFeedComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
