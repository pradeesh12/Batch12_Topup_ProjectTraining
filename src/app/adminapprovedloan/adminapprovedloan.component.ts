import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loanmodel } from '../model/loanmodel';
import { UserDisplayService } from '../services/user-display.service';

@Component({
  selector: 'app-adminapprovedloan',
  templateUrl: './adminapprovedloan.component.html',
  styleUrls: ['./adminapprovedloan.component.css']
})
export class AdminapprovedloanComponent implements OnInit {

 
  id:number;
  users: Loanmodel[];
 
  constructor(private displayservice:UserDisplayService,private router:Router) {
   
   }

  ngOnInit(): void {
    this.reloadData();
  }
  deleteCustomer(id: number) {
   const data=this.displayservice.deleteCustomer(id);
   if(data===true)
   {
    console.log("Deleted Suceesfully");
   }
   else
   {
        console.log("Not Deleted")
   }
  }
  customerDetails(id: number){
    this.router.navigate(['/details', id]);
  }
  searchCustomer(id:number)
  {
      this.router.navigate(['/searchdetail', id]);
  }
  reloadData() {
    this.users=this.displayservice.getEmployeesList();
 }
 editCustomer(id : number)
  {
    this.router.navigate(['/edit', id]);
  }
 

}
