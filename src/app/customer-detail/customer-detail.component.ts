import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loanmodel } from '../model/loanmodel'; 
import { UserDisplayService } from '../services/user-display.service'; 

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  id:number;
  model:Loanmodel;
  constructor(private route: ActivatedRoute,private router: Router,private userservice:UserDisplayService) { }

  ngOnInit(): void {
    this.model=new Loanmodel();
    this.id=this.route.snapshot.params['id'];
    this.model=this.userservice.getCustomer(this.id); 
  }
  list()
  {
    this.router.navigate(['/adminappliedloan']);
  }
  list1()
  {
    this.router.navigate(['/adminapprovedloan']);
  }

}
