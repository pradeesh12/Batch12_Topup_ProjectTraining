import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminappliedloanComponent } from './adminappliedloan/adminappliedloan.component';
import { AdminapprovedloanComponent } from './adminapprovedloan/adminapprovedloan.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { HomeComponent } from './home/home.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"adminappliedloan",component:AdminappliedloanComponent},
{path:"adminapprovedloan",component:AdminapprovedloanComponent},
{path:"details/:id",component:CustomerDetailComponent},
{path:"edit/:id",component:CustomerEditComponent},
{path:'searchdetail/:id',component:SearchCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
