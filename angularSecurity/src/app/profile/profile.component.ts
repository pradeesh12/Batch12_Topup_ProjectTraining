import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Loanmodel } from '../model/loanmodel';
import { CustomerService } from '../_services/customer.service';
import { details } from './details';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
i:Loanmodel;
detail:details;
  constructor(private route: ActivatedRoute,private router: Router,private customerservice:CustomerService) {

   }
  // id=LoginComponent.id;
  editCustomer(id : number)
  {
    this.router.navigate(['/edit', id]);
  }
 
  ngOnInit() {
  //  this.i=new Loanmodel();
  // //  this.customerservice.getProfile(this.id)
  // //  .subscribe(data => {console.log(data)
  //     this.i = data;
  //   }, error => console.log(error)); 
  }
  

}