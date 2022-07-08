import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loanmodel } from '../model/loanmodel';
import { UserDisplayService } from '../services/user-display.service';

@Component({
  selector: 'app-adminappliedloan',
  templateUrl: './adminappliedloan.component.html',
  styleUrls: ['./adminappliedloan.component.css']
})
export class AdminappliedloanComponent implements OnInit {
  users: Loanmodel[];
  temp:string;
  tempid:number;
  accept:string;
  constructor(private displayservice:UserDisplayService,private router:Router) { 
       
  }
    ngOnInit() {
      this.reloadData();
    }
    approveLoan(id:number)
    {
      this.tempid=id;
      this.displayservice.approveCustomer(this.tempid);
    }
    rejectLoan(id:number)
    {
      this.tempid=id;
      this.displayservice.rejectCustomer(this.tempid);
    }
  reloadData() {
     this.users=this.displayservice.getEmployeesList();
  }
  
  deleteCustomer(id: number) {
    this.displayservice.deleteCustomer(id);
  }
  customerDetails(id: number){
    this.router.navigate(['/details', id]);
  }
  editCustomer(id : number)
  {
    this.router.navigate(['/edit', id]);
  }
}
