import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loanmodel } from '../model/loanmodel'; 

@Injectable({
  providedIn: 'root'
})
export class UserDisplayService {
  
  loans:Loanmodel[]=[{
    loanId: 1,
		loantype: "savings",
		applicantName: "user1",
	    applicantAddress: "chennai",
		applicantMobile: "9965659980",
		applicantEmail: "user1@gmail.com",
		applicantAadharr: "1234",
		applicantPan: "1234",
		applicantSalary: "1234",
		loanAmountRequired: "1234",
		repaymentMonths: "12",
        apprej: "app",
  },{
    loanId: 2,
		loantype: "savings",
		applicantName: "user2",
	    applicantAddress: "chennai",
		applicantMobile: "9965659980",
		applicantEmail: "user1@gmail.com",
		applicantAadharr: "1234",
		applicantPan: "1234",
		applicantSalary: "1234",
		loanAmountRequired: "1234",
		repaymentMonths: "12",
        apprej: "rej",
  },
  {
    loanId: 3,
		loantype: "savings",
		applicantName: "user1",
	    applicantAddress: "chennai",
		applicantMobile: "9965659980",
		applicantEmail: "user1@gmail.com",
		applicantAadharr: "1234",
		applicantPan: "1234",
		applicantSalary: "1234",
		loanAmountRequired: "1234",
		repaymentMonths: "12",
        apprej: "app",
  },{
    loanId: 4,
		loantype: "savings",
		applicantName: "user1",
	    applicantAddress: "chennai",
		applicantMobile: "9965659980",
		applicantEmail: "user1@gmail.com",
		applicantAadharr: "1234",
		applicantPan: "1234",
		applicantSalary: "1234",
		loanAmountRequired: "1234",
		repaymentMonths: "12",
        apprej: "",
  },
  {
    loanId: 5,
		loantype: "savings",
		applicantName: "user1",
	    applicantAddress: "chennai",
		applicantMobile: "9965659980",
		applicantEmail: "user1@gmail.com",
		applicantAadharr: "1234",
		applicantPan: "1234",
		applicantSalary: "1234",
		loanAmountRequired: "1234",
		repaymentMonths: "12",
        apprej: "",
  }
];
  // private usersUrl: string;
  // private usersurl1: string;
  // private approve : string;
  // private reject : string;
  // private profile:string;

  // constructor(private http: HttpClient) {
  //   this.profile='http://localhost:8080/getProfile';
  //   this.usersUrl = 'http://localhost:8080/displaycustomers';
  //   this.usersurl1='http://localhost:8080/editCus';
  //   this.approve="http://localhost:8080/approve";
  //   this.reject="http://localhost:8080/reject";
  // }
  // getProfile(id: string):Observable<any>{
  //    return this.http.get(`${this.profile}/${id}`);
  // }
  getEmployeesList() {
    return this.loans;
  }
  deleteCustomer(id: number){
  for (let i = 0; i < this.loans.length; i++) {
    console.log(id+" "+this.loans[i].loanId);
   if(id==this.loans[i].loanId)
   {
        this.loans[i].loanId=0;
        //console.log("Anser");
        return true;
   }
  }
   return false;
}
  getCustomer(id: number){
    for (let i = 0; i < this.loans.length; i++) {
      console.log(id+" "+this.loans[i].loanId);
     if(id==this.loans[i].loanId)
     {
          //console.log("Anser");
          return this.loans[i];
     }
    }
  return this.loans[1];
  }
  approveCustomer(id:number)
  {
    for (let i = 0; i < this.loans.length; i++) {
      console.log(id+" "+this.loans[i].loanId);
     if(id==this.loans[i].loanId)
     {
          this.loans[i].apprej="app";
     }
  }
  }
   rejectCustomer(id:number)
  {
    for (let i = 0; i < this.loans.length; i++) {
      console.log(id+" "+this.loans[i].loanId);
     if(id==this.loans[i].loanId)
     {
          this.loans[i].apprej="rej";
     }
   }
  }
  editCustomer(id:number, ser: Loanmodel)
  {
    let flag=0;
    i1:UserDisplayService;
    for (let i = 0; i < this.loans.length; i++) {
        //console.log(num+" "+this.items[i].id);
       if(id==this.loans[i].loanId)
       {
            flag=i;
            break;
       }

    }
    const i1=this.loans[flag];
    i1.applicantName=ser.applicantName;
    i1.applicantAddress=ser.applicantAddress;
    i1.applicantMobile=ser.applicantMobile;
    i1.loantype=ser.loantype;
    i1.applicantEmail=ser.applicantEmail;
    i1.applicantAadharr=ser.applicantAadharr;
    i1.applicantPan=ser.applicantPan;
    i1.applicantSalary=ser.applicantSalary;
    i1.loanAmountRequired=ser.loanAmountRequired;
    i1.repaymentMonths=ser.repaymentMonths;
		
  }
  }
