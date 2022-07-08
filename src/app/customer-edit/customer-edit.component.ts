import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDisplayService } from '../services/user-display.service'; 
import { Loanmodel } from '../model/loanmodel'; 

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id:number;
  customer:Loanmodel;

  constructor(private route: ActivatedRoute,private router: Router,
    private userservice: UserDisplayService) { }

  ngOnInit(): void {
    this.customer = new Loanmodel();

    this.id = this.route.snapshot.params['id'];
    
    this.customer=this.userservice.getCustomer(this.id)
  }
  editCustomers() {
    this.userservice.editCustomer(this.id,this.customer)
  }
  list()
  {
    this.router.navigate(['/adminappliedloan']);
  }
  list1()
  {
    this.router.navigate(['/adminapprovedloan']);
  }
  onSubmit() {
    this.editCustomers();    
  }
  gotoList() {
    this.router.navigate(['/adminappliedloan']);
  }

}
