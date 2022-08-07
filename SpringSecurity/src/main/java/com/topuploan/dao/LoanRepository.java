package com.topuploan.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.topuploan.entity.LoanModel;

@Repository
public interface LoanRepository extends JpaRepository<LoanModel, Long>{

	LoanModel getByLoanId(Long id); 



	
 

   
   
    


}
